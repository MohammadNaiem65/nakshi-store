import { Benefits, Contact, Hero, ProductSlider } from '../components/Home';

export default function Home() {
    return (
        <section className='min-h-screen bg-[#EFEAE6]'>
            <Hero />

            <main className='max-w-7xl mx-auto px-4 py-12'>
                <Benefits />

                <ProductSlider />

                <Contact />
            </main>
        </section>
    );
}
