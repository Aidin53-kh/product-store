import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaFieldProps {
    setFieldValue(field: string, value: any): void;
    errors?: any;
    touched?: any;
    name: string;
}

const ReCaptchaField: React.FC<ReCaptchaFieldProps> = ({ setFieldValue, errors, touched, name }) => (
    <div>
        <ReCAPTCHA
            sitekey="6Le0vsYdAAAAANCN34glfz9kOf-Nlo9WCfrBhct8"
            onChange={(res) => setFieldValue(name, res)}
        />
        {errors[name] && touched[name] ? (
            <div className="text-red-500 dark:text-red-400 samim-bold text-xs mt-1">{errors[name]}</div>
        ) : null}
    </div>
);

export default ReCaptchaField;
