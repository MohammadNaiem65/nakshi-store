import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <main>
            <Navbar />

            <section className='min-h-[calc(100vh-18.5rem)]'>
                <Suspense>
                    <Outlet />
                </Suspense>
            </section>

            <Footer />
        </main>
    );
}

export default App;
