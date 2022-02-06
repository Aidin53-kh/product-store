import React from "react";
import { Field } from "formik";
import {
    FormControlLabel as MuiFormControlLabel,
    FormControlLabelProps,
    Checkbox as MuiCheckBox,
    CheckboxProps,
    Button as MuiButton,
    ButtonProps,
    Slide,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
// import ReCAPTCHA from "react-google-recaptcha";

export const FormControlLabel: React.FC<FormControlLabelProps> = ({ name, ...props }) => (
    <Field name={name}>{({ field }) => <MuiFormControlLabel {...field} {...props} />}</Field>
);

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => (
    <MuiCheckBox color="primary" className={`base-text-700 ${className || ""}`} {...props} />
);

export const Button: React.FC<ButtonProps> = ({ children, className, variant, ...props }) => (
    <MuiButton
        variant={variant || "contained"}
        classes={{ label: "samim-bold text-ms" }}
        className={`px-5 rounded-full ${!variant && "bg-green-400"} ${className || ""}`}
        {...props}
    >
        {children}
    </MuiButton>
);

// interface ReCaptchaFieldProps {
//     setFieldValue(field: string, value: any): void;
//     errors?: any;
//     touched?: any;
//     name: string;
// }

// export const ReCaptchaField: React.FC<ReCaptchaFieldProps> = ({ setFieldValue, errors, touched, name }) => (
//     <div>
//         <ReCAPTCHA
//             sitekey="6Le0vsYdAAAAANCN34glfz9kOf-Nlo9WCfrBhct8"
//             onChange={(res) => setFieldValue(name, res)}
//         />
//         {errors[name] && touched[name] ? (
//             <div className="text-red-500 dark:text-red-400 samim-bold text-xs mt-1">{errors[name]}</div>
//         ) : null}
//     </div>
// );

export const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
