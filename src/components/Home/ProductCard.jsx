import { FaStar } from 'react-icons/fa6';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

export default function ProductCard({ product }) {
    return (
        <div className='w-[18rem] h-[20rem] p-2 bg-white rounded shadow-sm overflow-hidden transform transition-transform duration-300 group'>
            <div className='relative h-[200px] overflow-hidden'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover duration-300 rounded group-hover:scale-105'
                />
                <span className='absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-x-1'>
                    <FaBangladeshiTakaSign />
                    {product.price}
                </span>
            </div>
            <div className='p-2'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>
                    {product.name}
                </h3>
                <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                            key={index}
                            className={`w-4 h-4 ${
                                index < product.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
