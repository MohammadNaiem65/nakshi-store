import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import AuthLayout from '../../components/Auth/AuthLayout';
import FormInput from '../../components/Auth/FormInput';

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

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
                    />
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
                        placeholder='Create a password'
                    />
                    <FormInput
                        label='Confirm Password'
                        type='password'
                        id='confirmPassword'
                        placeholder='Confirm your password'
                    />
                </div>

                <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                    <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        <FaUserPlus className='h-5 w-5 text-blue-500 group-hover:text-blue-400' />
                    </span>
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
