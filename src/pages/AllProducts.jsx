import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { CategoryFilter, Product, SearchBar } from '../components/AllProducts';
import ProductSK2 from '../shared/skeletons/ProductSK2';

export default function AllProducts() {
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const axiosSecure = useAxiosSecure();

    const { data, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products');
            return res.data;
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    const onSearch = (e) => {
        setSearchParams(
            (prev) => {
                if (e.target.value) {
                    prev.set('query', e.target.value);
                } else {
                    prev.delete('query');
                }
                return prev;
            },
            { replace: true }
        );
    };

    console.log(data);

    return (
        <main>
            {/* Hero Section with Search */}
            <section className='w-3/4 mx-auto text-center mt-12 pb-12 border-b-2 border-gray-200'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                    Find The Perfect Nakshi
                </h2>
                <p className='text-gray-600 mb-8'>
                    From Our Premium Products Collection
                </p>
                <SearchBar
                    searchQuery={searchParams.get('query')}
                    onSearch={onSearch}
                />
            </section>

            <CategoryFilter />

            <section className='w-4/5 mx-auto my-20 grid grid-cols-4 gap-3'>
                {isFetching || loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                          <ProductSK2 key={index} />
                      ))
                    : data.map((product) => (
                          <Product key={product.id} product={product} />
                      ))}
            </section>
        </main>
    );
}
