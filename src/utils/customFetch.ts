import axios, { AxiosInstance } from "axios";

const customFetch: AxiosInstance = axios.create({
    baseURL: 'https://findfalcone.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default customFetch;
