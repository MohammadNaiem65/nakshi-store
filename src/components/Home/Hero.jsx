import { Link } from 'react-router-dom';
import coverImg from '../../assets/nakshi-katha-cover-3.jpeg';

export default function Hero() {
    return (
        <section
            className='hero min-h-[calc(100vh-3.75rem)]'
            style={{
                backgroundImage: `url(${coverImg})`,
            }}
        >
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-neutral-content text-center'>
                <div className='max-w-md'>
                    <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
                    <p className='mb-5'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to='/allProducts' className='btn btn-primary'>
                        Explore All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
