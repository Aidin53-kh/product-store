import * as Yup from "yup";

export const contactSchema = Yup.object({
    fullname: Yup.string()
        .min(6, "نام و نام خانوادگی باید بیشتر از 5 حرف باشد")
        .max(19, "نام و نام خانوادگی باید کم از 20 حرف باشد")
        .required("نام و نام خانوادگی تان را وارد کنید"),
    email: Yup.string().email("ایمیل معتبر نیست").required("لطفا ایمیلتان را وارد کنید"),
    message: Yup.string().max(2000, "متن پیام زیاد است").required("متن پیام را وارد کنید"),
    captchaResponse: Yup.string().nullable().required("اعتبار سنجی captcha الزامی است"),
    subject: Yup.string().max(70, "عنوان پیام طولانی است").required("عنوان پیام را وارد کنید"),
});
