import { toast, ToastOptions } from 'react-toastify';
import Swal from 'sweetalert2';

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

export const yellowAlert = (title: string, message: string) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        confirmButtonText: "بله",
        showCancelButton: true,
        cancelButtonText: "خیر",
    });
}

export const redAlert = (title: string, message: string) => {
    return Swal.fire({ title, text: message, icon: "error", confirmButtonText: "باشه" });
}
