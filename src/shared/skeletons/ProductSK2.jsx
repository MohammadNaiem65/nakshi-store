import { FaStar } from 'react-icons/fa6';

export default function ProductSK2() {
    return (
        <div className='w-[17.25rem] p-2 flex flex-col border border-gray-300/40 group animate-pulse'>
            <div className='relative group'>
                <div className='w-full aspect-[3/4] bg-gray-200 rounded-sm'></div>
            </div>

            <div className='mt-3 space-y-1'>
                <div className='h-6 bg-gray-200 rounded w-3/4'></div>

                <div className='flex gap-1'>
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className='w-4 h-4 text-gray-200' />
                    ))}
                </div>

                <div className='h-4 bg-gray-200 rounded w-1/2'></div>

                <div className='w-24 h-8 mx-auto bg-blue-600 rounded'></div>
            </div>
        </div>
    );
}
