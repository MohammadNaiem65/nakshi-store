import toast from 'react-hot-toast';

export default function notify(type, message) {
    return toast[type](message, {
        style: {
            border: '1px solid #3B82F6',
            padding: '16px',
            color: '#000000',
        },
        iconTheme: {
            primary: '#3B82F6',
            secondary: '#FFFAEE',
        },
    });
}
