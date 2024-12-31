export default function FormInput({
    label,
    type,
    id,
    placeholder,
    required = true,
}) {
    return (
        <div>
            <label
                htmlFor={id}
                className='block text-sm font-medium text-gray-700'
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                required={required}
                placeholder={placeholder}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border'
            />
        </div>
    );
}
