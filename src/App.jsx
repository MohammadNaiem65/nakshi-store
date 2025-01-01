import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useIsAuthenticated from './hooks/useIsAuthenticated';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Loader from './shared/Loader';

function App() {
    const isAuthenticated = useIsAuthenticated();

    return !isAuthenticated ? (
        <Loader />
    ) : (
        <main>
            <Navbar />

            <section className='min-h-[calc(100vh-18.5rem)]'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </section>

            <Footer />

            <Toaster />
        </main>
    );
}

export default App;
