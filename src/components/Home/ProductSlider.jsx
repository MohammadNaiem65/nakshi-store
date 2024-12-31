import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ProductSK from '../../shared/skeletons/ProductSk';
import ProductCard from './ProductCard';
import Error from '../../shared/Error';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

export default function ProductSlider() {
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const { data, isFetching, isSuccess, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get(
                '/products?_sort=rating&_order=desc&_limit=6'
            );
            return res.data;
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <>
            <div className='text-center pt-10'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                    Featured Products
                </h1>
                <p className='text-gray-600'>
                    Discover our collection of premium products
                </p>
            </div>

            <section className='w-4/5 my-10 mx-auto'>
                {isFetching || loading ? (
                    <section className='mx-auto flex gap-x-5'>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <ProductSK key={index} />
                        ))}
                    </section>
                ) : isError ? (
                    <Error message={error?.message} />
                ) : (
                    isSuccess && (
                        <Slider {...settings}>
                            {data?.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </Slider>
                    )
                )}
                {/* <Slider {...settings}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Slider> */}
            </section>
        </>
    );
}
