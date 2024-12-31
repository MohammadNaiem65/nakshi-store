import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import CategoryButton from './CategoryButton';
import ButtonSK from '../../shared/skeletons/ButtonSK';

export default function CategoryFilter() {
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const {
        data: categories,
        isFetching,
        isSuccess,
    } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosSecure.get('/categories');
            return ['all', ...res.data];
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    return (
        <div className='w-3/4 mt-2 mx-auto relative select-none'>
            <div className='flex gap-4 pb-4'>
                <div className='flex gap-4 min-w-max'>
                    {isFetching || loading
                        ? Array.from({ length: 6 }).map((_, index) => (
                              <ButtonSK key={index} />
                          ))
                        : isSuccess &&
                          categories?.map((category) => (
                              <CategoryButton
                                  key={category}
                                  category={category}
                              />
                          ))}
                </div>
            </div>
        </div>
    );
}
