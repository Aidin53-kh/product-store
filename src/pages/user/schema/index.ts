import * as Yup from "yup";

export const changePasswordSchema = Yup.object({
    password: Yup.string().min(6, "رمز عبور باید بیشتر از 5 حرف باشد").required("رمز عبور فعلی را وارد کنید"),
    newPassword: Yup.string().min(6, "رمز عبور جدید باید بیشتر از 5 حرف باشد").required("رمز عبور جدید را وارد کنید"),
    confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "کلمه های عبور یکسان نیست")
        .required("تکرار رمز عبور جدید را وارد کنید"),
});

export const resetPasswordSchema = {
    step1: Yup.object({
        email: Yup.string().email("ایمیل معتبر نیست").required("لطفا ایمیلتان را وارد کنید"),
    }),
    step2: Yup.object({
        newPassword: Yup.string()
            .min(6, "رمز عبور جدید باید بیشتر از 5 حرف باشد")
            .required("رمز عبور جدید را وارد کنید"),
        confirmNewPassword: Yup.string()
            .oneOf([Yup.ref("newPassword")], "کلمه های عبور یکسان نیست")
            .required("تکرار رمز عبور جدید را وارد کنید"),
        verifyCode: Yup.string().required("کد امنیتی را وارد کنید"),
    }),
};
