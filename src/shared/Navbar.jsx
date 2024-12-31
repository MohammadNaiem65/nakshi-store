import { NavLink, Link } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { RiShoppingCartLine, RiLoginCircleLine } from 'react-icons/ri';

export default function Navbar() {
    return (
        <nav className='sticky top-0 bg-white shadow-sm px-5 py-7 flex items-center justify-end z-50'>
            {/* Logo */}
            <div className='absolute left-1/2 transform -translate-x-1/2'>
                <Link
                    to='/'
                    className='text-2xl text-transparent font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text transition-colors'
                >
                    Nokshi Store
                </Link>
            </div>

            {/* Navigation Links */}
            <div className='flex items-center gap-6'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `flex items-center gap-2 hover:text-blue-700 transition-colors ${
                            isActive ? 'text-[#3B82F6]' : 'text-gray-600'
                        }`
                    }
                >
                    <GoHome className='size-5' />
                    <span>Home</span>
                </NavLink>

                <NavLink
                    to='/all-products'
                    className={({ isActive }) =>
                        `flex items-center gap-2 hover:text-blue-700 transition-colors ${
                            isActive ? 'text-[#3B82F6]' : 'text-gray-600'
                        }`
                    }
                >
                    <BsBoxSeam className='size-5' />
                    <span>All Products</span>
                </NavLink>

                {/* Cart Icon */}
                <div className='relative group'>
                    <NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            `flex items-center gap-2 hover:text-blue-700 transition-colors ${
                                isActive ? 'text-[#3B82F6]' : 'text-gray-600'
                            }`
                        }
                    >
                        <div className='relative'>
                            <RiShoppingCartLine className='size-5' />
                            <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                8
                            </span>
                        </div>
                        Cart
                    </NavLink>
                </div>

                <NavLink
                    to='/login'
                    className={({ isActive }) =>
                        `flex items-center gap-2 hover:text-blue-700 transition-colors ${
                            isActive ? 'text-[#3B82F6]' : 'text-gray-600'
                        }`
                    }
                >
                    <RiLoginCircleLine className='size-5' />
                    <span>Login</span>
                </NavLink>
            </div>
        </nav>
    );
}
