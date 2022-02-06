import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion"; 
import { Formik, Form } from "formik";

import { changePassword, ChangePasswordData } from "../../../services/userService";
import { errorMessage, successMessage } from "../../../utils/messages";
import { changePasswordSchema } from "../schema";
import { TextField } from "../../../components/textfield";

const ChangePassword: React.FC = () => {
    const history = useHistory();

    const handleSubmit = async (values: ChangePasswordData) => {
        try {
            const { status } = await changePassword(values);
            if (status === 200) successMessage("رمز عبور شما با موفقیت تغییر کرد");
            history.replace("/user-info");
        } catch ({ data }) {
            errorMessage(data.message);
        }
    };

    return (
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Formik
                initialValues={{
                    password: "",
                    newPassword: "",
                    confirmNewPassword: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={changePasswordSchema}
            >
                <Form className="px-3 my-8 max-w-xl mx-auto">
                    <h1 className="mb-6 text-2xl samim-bold base-text-900 text-center">تغییر رمز عبور</h1>
                    <TextField
                        name="password"
                        type="password"
                        icon="lock"
                        placeholder="رمز عبور فعلی"
                        label="رمز عبور فعلی"
                    />
                    <TextField
                        name="newPassword"
                        type="password"
                        icon="lock"
                        placeholder="رمز عبور جدید"
                        label="رمز عبور جدید"
                    />
                    <TextField
                        icon="lock"
                        name="confirmNewPassword"
                        type="password"
                        placeholder="تکرار رمز عبور جدید"
                        label="تکرار رمز عبور جدید"
                    />
                    <div className="flex items-center justify-between">
                        <Link className="text-blue-400 text-xs md:text-sm" to="/reset-password">
                            رمز عبور فعلی را فراموش کردم
                        </Link>
                        <Button
                            type="submit"
                            variant="contained"
                            className="rounded-full bg-green-400 samim-bold text-white px-4"
                        >
                            تغییر رمز
                        </Button>
                    </div>
                </Form>
            </Formik>
        </motion.div>
    );
};

export default ChangePassword;
