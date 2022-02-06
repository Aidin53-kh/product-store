import React from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import { ContactValues, CONTACT_INITIAL_VALUES, sendContactEmail } from "../../services/userService";
import { errorMessage, successMessage } from "../../utils/messages";
import { contactSchema } from "./schema";
import { TextArea, TextField } from "../../components/textfield";
import { Button } from "../../components/button";
import ReCaptchaField from "../../components/captcha";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    const history = useHistory();

    const handleSubmit = async (values: ContactValues) => {
        try {
            const { data, status } = await sendContactEmail(values);
            if (status === 200) {
                successMessage(data.message);
                history.replace("/");
            }
        } catch ({ data }) {
            errorMessage(data.message);
        }
    };

    return (
        <div className="_container">
            <Formik initialValues={CONTACT_INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={contactSchema}>
                {({ errors, touched, setFieldValue, isSubmitting }) => (
                    <Form className="flex flex-col gap-5 max-w-xl mb-12 mx-auto px-2 rtl" autoComplete="off">
                        <Typography variant="h4" className="mb-5 mt-10 text-center base-text-900 samim-bold">
                            تماس با ما
                        </Typography>
                        <TextField
                            name="fullname"
                            label="نام و نام خانوادگی"
                            placeholder="نام و نام خانوادگی"
                            icon="person"
                        />
                        <TextField name="subject" label="عنوان پیام" placeholder="عنوان پیام" icon="title" />
                        <TextField name="email" label="ادرس ایمیل" placeholder="ادرس ایمیل" icon="email" />
                        <TextArea rows={7} name="message" label="پیام شما" placeholder="پیام شما" />
                        <ReCaptchaField
                            name="captchaResponse"
                            setFieldValue={setFieldValue}
                            errors={errors}
                            touched={touched}
                        />
                        <footer>
                            <Button disabled={isSubmitting} type="submit">
                                {isSubmitting ? (
                                    <>
                                        <span className="text-gray-900">در حال ارسال</span>
                                        <CircularProgress className="text-gray-900 mr-3" size={20} />
                                    </>
                                ) : (
                                    "ارسال پیام"
                                )}
                            </Button>
                        </footer>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
