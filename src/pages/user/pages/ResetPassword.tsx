import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, CircularProgress, Icon } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import { Form, Formik } from "formik";

import { errorMessage, successMessage } from "../../../utils/messages";
import { resetPasswordSchema } from "../schema";
import { TextField } from "../../../components/textfield";
import { forgetPassword, sendVerifyCode } from "../../../services/userService";

const ResetPassword: React.FC = () => {
    const history = useHistory();
    
    const [step, setStep] = useState(1);
    const [verifyCode, setVerifyCode] = useState(0);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendEmail = async ({ email }) => {
        setLoading(true);
        setEmail(email);
        try {
            const { data, status } = await sendVerifyCode(email);
            setLoading(false);
            if (status === 200) {
                setVerifyCode(data.verifyCode);
                setStep(2);
            }
        } catch ({ data }) {
            errorMessage(data.message);
            setLoading(false);
        }
    };

    const handleResetPassword = async (data) => {
        if (data.verifyCode !== verifyCode) return errorMessage("کد امنیتی نادرست است");
        setLoading(true);
        try {
            const { status } = await forgetPassword({ ...data, email });
            if (status === 200) {
                successMessage("رمز عبورتان با موفقیت ویرایش شد");
                setLoading(false);
                history.replace("/login");
            }
        } catch ({ data }) {
            errorMessage(data.message);
            setLoading(false);
        }
    };

    return (
        <div className="relative rtl my-12">
            <AnimatePresence>
                {step === 1 && (
                    <motion.div
                        className="absolute w-full px-3"
                        initial={{ y: -60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ y: -60, opacity: 0 }}
                    >
                        <Formik
                            initialValues={{ email: "" }}
                            validationSchema={resetPasswordSchema.step1}
                            onSubmit={handleSendEmail}
                        >
                            <Form className="px-3 my-8 max-w-lg mx-auto">
                                <h1 className="mb-6 text-2xl samim-bold base-text-900 text-center">فراموشی رمز عبور</h1>
                                <TextField
                                    type="email"
                                    name="email"
                                    disabled={loading}
                                    icon="email"
                                    placeholder="ادرس ایمیل"
                                    label="ادرس ایمیل"
                                />
                                <div className="text-center">
                                    <Button
                                        disabled={loading}
                                        type="submit"
                                        variant="contained"
                                        className="bg-green-500 samim-bold px-8 rounded-full"
                                    >
                                        {loading ? <CircularProgress className="text-white" size={20} /> : "تایید"}
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {step === 2 && (
                    <Formik
                        initialValues={{
                            newPassword: "",
                            confirmNewPassword: "",
                            verifyCode: "",
                        }}
                        validationSchema={resetPasswordSchema.step2}
                        onSubmit={handleResetPassword}
                    >
                        <motion.div
                            className="absolute w-full"
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 60, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Form className="px-3 my-8 max-w-lg mx-auto">
                                <h1 className="mt-6 mb-3 text-2xl samim-bold base-text-900 text-center">کد امنیتی</h1>
                                <p className="text-xs md:text-sm base-text-800 samim-bold mb-6 text-center">
                                    ایمیل حاوی کد امنیتی برایتان ارسال شد
                                </p>
                                <TextField
                                    disabled={loading}
                                    name="newPassword"
                                    type="password"
                                    icon="lock"
                                    placeholder="رمز عبور جدید"
                                    label="رمز عبور جدید"
                                />
                                <TextField
                                    disabled={loading}
                                    name="confirmNewPassword"
                                    type="password"
                                    icon="lock"
                                    placeholder="تکرار رمز عبور جدید"
                                    label="تکرار رمز عبور جدید"
                                />
                                <TextField
                                    disabled={loading}
                                    type="number"
                                    name="verifyCode"
                                    icon="lock"
                                    placeholder="کد امنیتی"
                                    label="کد امنیتی"
                                />
                                <div className="flex justify-between">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        variant="contained"
                                        className="bg-green-500 samim-bold px-8 rounded-full"
                                    >
                                        {loading ? <CircularProgress className="text-white" size={20} /> : "تایید"}
                                    </Button>
                                    <Button
                                        disabled={loading}
                                        onClick={() => setStep(1)}
                                        variant="contained"
                                        className="bg-red-400 samim-bold pl-5 pr-7 rounded-full"
                                    >
                                        مرحله قبل
                                        <Icon fontSize="small" className="mr-2">
                                            arrow_back
                                        </Icon>
                                    </Button>
                                </div>
                            </Form>
                        </motion.div>
                    </Formik>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ResetPassword;
