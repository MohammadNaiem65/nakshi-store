import { Link } from 'react-router-dom';
import {
    FaBangladeshiTakaSign,
    FaStar,
    FaRegStarHalfStroke,
} from 'react-icons/fa6';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import toast from 'react-hot-toast';
import UserContext from '../../contexts/UserContext';

export default function Product({ product }) {
    const { id, name, price, image, rating } = product || {};

    const { user } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = () => {
        if (!user?.data?.id) {
            toast.error('Please login to add to cart');
            return;
        }

        const existingProduct = cart?.find((pr) => pr.id === id);
        let updatedCart;

        if (existingProduct) {
            updatedCart = cart.map((pr) =>
                pr.id === id
                    ? {
                          ...pr,
                          quantity: pr.quantity === 5 ? 5 : pr.quantity + 1,
                      }
                    : pr
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success('Added to cart');
    };

    return (
        <div className='w-[17.25rem] p-2 flex flex-col border border-gray-300/40 group'>
            <div className='relative group'>
                <img
                    src={image}
                    alt={name}
                    className='w-full aspect-[3/4] object-cover rounded-sm transition-transform duration-300 group-hover:scale-105'
                />
            </div>

            <div className='mt-3 space-y-1'>
                <Link
                    to={`/product/${id}`}
                    className='font-medium text-lg leading-tight line-clamp-2 hover:underline'
                >
                    {name}
                </Link>

                <div className='flex gap-1'>
                    {[...Array(5)].map((_, index) =>
                        rating >= index + 1 ? (
                            <FaStar
                                key={index}
                                className='w-4 h-4 fill-yellow-400 text-yellow-400'
                            />
                        ) : rating >= index + 0.5 ? (
                            <FaRegStarHalfStroke
                                key={index}
                                className='w-4 h-4 fill-yellow-400 text-yellow-400'
                            />
                        ) : (
                            <FaStar
                                key={index}
                                className='w-4 h-4 text-gray-300'
                            />
                        )
                    )}
                </div>

                <p className='font-medium flex items-center gap-x-1'>
                    <FaBangladeshiTakaSign />
                    {price?.toFixed(2)}
                </p>

                <button
                    onClick={handleAddToCart}
                    className='px-6 py-2 mx-auto block bg-blue-600 text-white rounded-sm transition-opacity duration-300 hover:bg-blue-700'
                >
                    Add
                </button>
            </div>
        </div>
    );
}
