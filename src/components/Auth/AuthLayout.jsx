export default function AuthLayout({ children, title, subtitle }) {
    return (
        <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md'>
                <div>
                    <h2 className='text-center text-3xl font-extrabold text-gray-900'>
                        {title}
                    </h2>
                    <p className='mt-2 text-center text-sm text-gray-600'>
                        {subtitle}
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
}
