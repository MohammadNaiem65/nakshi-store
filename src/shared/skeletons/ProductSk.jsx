import { FaStar } from 'react-icons/fa6';

export default function ProductSK() {
    return (
        <div className='w-[300px] bg-gray-200 animate-pulse rounded shadow-sm overflow-hidden transform transition-transform duration-300'>
            <div className='relative h-[200px] overflow-hidden'>
                <div className='w-full h-full' />
                <div className='absolute top-3 right-3 px-2 py-1 rounded-full text-sm' />
            </div>
            <div className='p-4'>
                <div className='h-5 bg-gray-400 mb-2 rounded' />
                <div className='w-1/3 h-5 bg-gray-400 mb-2 rounded' />
                <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} className='text-gray-400' />
                    ))}
                </div>
            </div>
        </div>
    );
}
