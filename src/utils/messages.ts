import { toast, ToastOptions } from 'react-toastify';

const baseToastOptions: ToastOptions = {
	position: 'top-right',
	autoClose: 3000,
};

export const successMessage = (message: string) => {
	toast.success(message, {...baseToastOptions, type: "success" });
};

export const errorMessage = (message: string) => {
	toast.success(message, {...baseToastOptions, type: "error" });
};
