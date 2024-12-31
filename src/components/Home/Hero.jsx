import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import coverImg from '../../assets/nakshi-katha-cover.jpeg';

export default function Hero() {
    return (
        <section className='relative mb-10'>
            <div className='absolute inset-0 bg-black/60 z-10' />
            <img
                src={coverImg}
                alt='Hero background'
                className='w-full h-screen object-cover'
            />
            <div className='absolute inset-0 z-20 flex items-center justify-center text-center'>
                <div className='max-w-3xl px-4'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                        Traditional Bengali Craftsmanship
                    </h1>
                    <p className='text-xl text-white mb-8'>
                        Discover the beauty of handcrafted Nakshi Kantha,
                        bringing centuries of tradition to your modern home
                    </p>
                    <Link
                        to='/all-products'
                        className='inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition'
                    >
                        Product Collection
                        <FaArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                </div>
            </div>
        </section>
    );
}
