import React, { useState } from "react";
import { Button, CircularProgress, Icon } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { registerUser } from "../../services/userService";
import { successMessage, errorMessage } from "../../utils/messages";
import { User } from "../../store/user/types";
import { TextField } from "../../components/textfield";

export const registerSchema = Yup.object({
    fullname: Yup.string()
        .min(6, "نام و نام خانوادگی باید بیشتر از 5 حرف باشد")
        .max(19, "نام و نام خانوادگی باید کم از 20 حرف باشد")
        .required("نام و نام خانوادگی تان را وارد کنید"),
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل تان را وارد کنید"),
    password: Yup.string().min(6, "رمز عبور باید بیشتر از 5 حرف باشد").required("رمز عبور تان را وارد کنید"),
});

const Register: React.FC = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (user: User) => {
        setLoading(true);
        try {
            const { status } = await registerUser(user);
            setLoading(false);
            if (status === 201) {
                successMessage("ثبت نام موفقیت امیز بود");
                history.replace("/login");
            }
        } catch ({ data }) {
            setLoading(false);
            errorMessage((data as {message: string}).message);
        }
    };

    return (
        <div className="py-8 lg:py-9 sticky top-0 xl:py-12">
            <div className="px-3">
                <Formik
                    initialValues={{ email: "", password: "", fullname: "" }}
                    onSubmit={handleRegister}
                    validationSchema={registerSchema}
                >
                    <Form className="register-card base-bg-800 rounded-md shadow-lg rtl px-3 py-7 max-w-lg mx-auto sm:px-4 md:px-5">
                        <h2 className="text-xl text-center base-text-900 samim-bold mb-3">ثبت نام در سایت</h2>
                        <small className="block samim-bold text-xs lg:text-sm base-text-700 text-center mb-10">
                            با ثبت نام در سایت به امکانات بیشتری دسترسی دارید
                        </small>
                        <TextField
                            disabled={loading}
                            name="fullname"
                            label="نام و نام خانوادگی"
                            placeholder="نام و نام خانوادگی"
                            icon="person"
                        />
                        <TextField
                            disabled={loading}
                            name="email"
                            label="آدرس ایمیل"
                            placeholder="آدرس ایمیل"
                            icon="email"
                        />
                        <TextField
                            disabled={loading}
                            name="password"
                            type="password"
                            label="رمز عبور"
                            placeholder="رمز عبور"
                            icon="visibility"
                        />
                        <div className="pb-6 text-gray-500 text-sm">
                            قبلا ثبت نام کردید ؟
                            <Link to="/login" className="base-text-blue samim-bold mr-2">
                                ورود
                            </Link>
                        </div>
                        <Button
                            disabled={loading}
                            color="primary"
                            variant="contained"
                            type="submit"
                            className="samim-bold text-gray-50 bg-green-500"
                            fullWidth
                        >
                            {loading ? <CircularProgress className="text-white" size={25} /> : "ثبت نام"}
                        </Button>
                        <div className="text-center flex itms-center gap-3 py-6">
                            <hr className="relative top-3 w-full opacity-30" />
                            <h4 className="text-md text-gray-400">or</h4>
                            <hr className="relative top-3 w-full opacity-30" />
                        </div>
                        <div className="flex gap-3">
                            <Button
                                disabled={loading}
                                variant="contained"
                                className="samim-bold text-gray-50 bg-blue-500"
                                fullWidth
                            >
                                <Icon fontSize="small" className="ml-3">
                                    facebook
                                </Icon>
                                فیسبوک
                            </Button>
                            <Button
                                disabled={loading}
                                variant="contained"
                                className="samim-bold text-gray-50 bg-red-500"
                                fullWidth
                            >
                                <Icon fontSize="small" className="ml-3">
                                    facebook
                                </Icon>
                                گوگل
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Register;
