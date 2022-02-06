import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Checkbox, CircularProgress, FormControlLabel } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { loginUser } from "../../services/userService";
import { addUser } from "../../store/user/action";
import { User } from "../../store/user/types";
import { errorMessage, successMessage } from "../../utils/messages";
import { TextField } from "../../components/textfield";
import { decodeToken } from "../../utils";
import { decode } from "jsonwebtoken";
// import { decodeToken } from "../../utils";

export const loginSchema = Yup.object({
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل تان را وارد کنید"),
    password: Yup.string().min(6, "رمز عبور باید بیشتر از 5 حرف باشد").required("رمز عبور تان را وارد کنید"),
});

const Login: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (user: User) => {
        setLoading(true);
        try {
            const { data, status } = await loginUser(user);
            setLoading(false);
            if (status === 200) {
                successMessage("ورود موفقیت امیز بود");
                if (rememberMe) localStorage.setItem("token", data.token);
                else sessionStorage.setItem("token", data.token);       
                dispatch(addUser(decodeToken(data.token).user));
                history.replace("/");
            }
        } catch ({ data }) {
            // user.password = "";  WTF
            setLoading(false);
            errorMessage((data as {message: string}).message);
        }
    };

    const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked);
    }

    return (
        <div className="py-8 lg:py-9 xl:py-12">
            <div className="px-3">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        rememberMe: false,
                    }}
                    onSubmit={handleLogin}
                    validationSchema={loginSchema}
                >
                    <Form className="login-card base-bg-800 rounded-md shadow-lg rtl px-3 py-7 max-w-lg mx-auto sm:px-4 md:px-5">
                        <h2 className="text-xl text-center base-text-900 samim-bold mb-3">ورود به سایت</h2>
                        <small className="block samim-bold text-xs lg:text-sm base-text-700 text-center mb-10">
                            قبل از ورود به سایت باید{" "}
                            <Link to="/register" className="base-text-blue samim-bold">
                                ثبت نام
                            </Link>{" "}
                            کرده باشید
                        </small>
                        <TextField
                            disabled={loading}
                            name="email"
                            type="email"
                            placeholder="example@gmail.com"
                            label="ایمیل"
                            icon="email"
                        />

                        <TextField
                            disabled={loading}
                            name="password"
                            type="password"
                            placeholder="یک رمز عبور جدید وارد کنید"
                            label="رمز عبور"
                            icon="visibility"
                        />
                        <div className="flex justify-between items-center pb-4">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled={loading}
                                        value={rememberMe}
                                        onChange={handleRememberMe}
                                        name="rememberMe"
                                        color="primary"
                                        className="base-text-blue"
                                    />
                                }
                                label="مرا به خاطد بسپار"
                                classes={{
                                    label: "text-xs samim select-none base-text-600 lg:text-sm",
                                }}
                                style={{ margin: "0px" }}
                            />
                            <Link className="text-blue-400 text-xs lg:text-sm" to="/reset-password">
                                فراموشی رمز عبور
                            </Link>
                        </div>
                        <Button
                            disabled={loading}
                            type="submit"
                            variant="contained"
                            className="samim-bold bg-green-500"
                            fullWidth
                        >
                            {loading ? <CircularProgress className="text-white" size={25} /> : "ورود"}
                        </Button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;
