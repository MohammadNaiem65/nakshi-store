export default function Benefits() {
    return (
        <section className='max-w-7xl mx-auto px-4 pt-16 pb-28'>
            <h2 className='text-3xl font-bold text-center mb-12'>
                Why Choose Our Products?
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center'>
                    <h3 className='text-xl font-semibold mb-4'>
                        Handcrafted Excellence
                    </h3>
                    <p className='text-gray-600'>
                        Each piece is carefully crafted by skilled artisans
                    </p>
                </div>
                <div className='text-center'>
                    <h3 className='text-xl font-semibold mb-4'>
                        Traditional Designs
                    </h3>
                    <p className='text-gray-600'>
                        Authentic Bengali patterns and motifs
                    </p>
                </div>
                <div className='text-center'>
                    <h3 className='text-xl font-semibold mb-4'>
                        Sustainable Art
                    </h3>
                    <p className='text-gray-600'>
                        Supporting local communities and traditional crafts
                    </p>
                </div>
            </div>
        </section>
    );
}
