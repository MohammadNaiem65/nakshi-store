import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FaUserPlus } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import notify from '../../utilities/notify';
import AuthLayout from '../../components/Auth/AuthLayout';
import FormInput from '../../components/Auth/FormInput';

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: async () =>
            axiosSecure.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password,
            }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.password) {
            return notify('error', 'All fields are required');
        } else if (data.password.length < 6) {
            return notify('error', 'Password must be at least 6 characters');
        } else if (data.password !== data.confirmPassword) {
            return notify('error', 'Passwords do not match');
        }

        mutate();
    };

    useEffect(() => {
        if (isSuccess) {
            notify('success', 'Registration successful');
            navigate('/login');
        } else if (isError) {
            notify('error', error.response.data || error.message);
        }
    }, [isSuccess, isError, error, navigate]);

    return (
        <AuthLayout
            title='Create your account'
            subtitle='Already have an account? Sign in instead'
        >
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <FormInput
                        label='Full Name'
                        type='text'
                        id='fullName'
                        placeholder='Enter your full name'
                        onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                        }
                    />
                    <FormInput
                        label='Email address'
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        id='password'
                        placeholder='Create a password'
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <FormInput
                        label='Confirm Password'
                        type='password'
                        id='confirmPassword'
                        placeholder='Confirm your password'
                        onChange={(e) =>
                            setData({
                                ...data,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                </div>

                <button
                    type='submit'
                    className='group relative w-full flex items-center gap-x-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    disabled={isPending}
                >
                    <FaUserPlus className='h-5 w-5 text-white' />
                    Create Account
                </button>

                <div className='text-center'>
                    <Link
                        to='/login'
                        className='font-medium text-blue-600 hover:text-blue-500'
                    >
                        Already have an account? Sign in
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
