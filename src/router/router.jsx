import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Home = lazy(() => import('../pages/Home/Home'));
const AllProducts = lazy(() => import('../pages/AllProducts/AllProducts'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/allProducts',
                element: <AllProducts />,
            },
        ],
    },
]);

export default router;
