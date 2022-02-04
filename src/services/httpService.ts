import { errorMessage } from './../utils/messages';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

axios.interceptors.request.use((req) => {
	const token = localStorage.getItem("token") || sessionStorage.getItem("token");
	if (token) (req.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
	return req;
});

axios.interceptors.response.use(undefined, ({response}) => {
	if (response && response.status >= 500) errorMessage("مشکلی از سمت سرور رخ داده");
	return Promise.reject(response);
});

const http = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

export default http;
