import axios from 'axios';

export default function useAxiosSecure() {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:3001',
    });

    return axiosSecure;
}
