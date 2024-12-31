import { Link } from 'react-router-dom';
import AuthLayout from '../../components/Auth/AuthLayout';
import FormInput from '../../components/Auth/FormInput';
import { RiLoginCircleLine } from 'react-icons/ri';

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
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
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        id='password'
                        placeholder='Enter your password'
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
