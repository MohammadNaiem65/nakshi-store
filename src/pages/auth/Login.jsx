import { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { RiLoginCircleLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import AuthLayout from '../../components/Auth/AuthLayout';
import FormInput from '../../components/Auth/FormInput';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { setAuthToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await axiosSecure.post('/login', {
                email,
                password,
            });

            return response.data;
        },
        onSuccess: (data) => {
            setAuthToken({ token: data.accessToken });
            setUser({ data: data.user });

            localStorage.setItem('auth', JSON.stringify(data));

            navigate(location?.state?.from?.pathname || '/');
        },
        onError: (error) => {
            toast.error(error.response.data);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate();
    };

    return (
        <AuthLayout
            title='Login to your account'
            subtitle="Or create a new account if you don't have one"
        >
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <FormInput
                        label='Email address'
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    className='group relative w-full flex items-center justify-center gap-x-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                    <RiLoginCircleLine className='h-5 w-5 text-white' />
                    Login
                </button>

                <div className='text-center'>
                    <Link
                        to='/register'
                        className='font-medium text-blue-600 hover:text-blue-500'
                    >
                        Don&apos;t have an account? Sign up
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
