import React from "react";
import { TextField as MuiTextField, Radio as MuiRadio, FormControlLabel, Icon, RadioGroup } from "@material-ui/core";
import { ErrorMessage, Field, useField } from "formik";

export const TextField = ({ label = "", icon = "", className = "", classes = '', ...props }) => {
    const [, meta] = useField(props.name);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={props.name} className="block base-text-900 samim-bold text-sm mb-2">
                    {label}
                </label>
            )}
            <div
                className={`w-full rounded-md overflow-hidden bg-gray-100 border border-transparent dark:bg-gray-700 outline-none flex items-center ${
                    meta.touched && meta.error && "border-red-500 dark:border-red-400"
                } ${classes || ""}`}
            >
                {icon && (
                    <Icon fontSize="small" className="text-gray-500 mr-4 ml-2">
                        {icon}
                    </Icon>
                )}
                <Field className={`w-full text-sm bg-transparent outline-none p-3 ${className || ""}`} {...props} />
            </div>
            <ErrorMessage
                component="div"
                name={props.name}
                className=" text-red-500 dark:text-red-400 samim-bold text-xs mt-1"
            />
        </div>
    );
};

export const TextArea = ({ label = "", icon = '', className = "", classes = '', ...props }) => {
    const [, meta] = useField(props.name);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={props.name} className="block base-text-900 samim-bold text-sm mb-2">
                    {label}
                </label>
            )}
            <div
                className={`w-full rounded-md overflow-hidden bg-gray-100 border border-transparent dark:bg-gray-700 outline-none flex items-center ${
                    meta.touched && meta.error && "border-red-500 dark:border-red-400"
                } ${classes || ""}`}
            >
                {icon && (
                    <Icon fontSize="small" className="text-gray-500 mr-4 ml-2">
                        {icon}
                    </Icon>
                )}
                <Field component="textarea" className={`w-full text-sm bg-transparent outline-none p-3 ${className || ""}`} {...props} />
            </div>
            <ErrorMessage
                component="div"
                name={props.name}
                className=" text-red-500 dark:text-red-400 samim-bold text-xs mt-1"
            />
        </div>
    );
};

export const FormikRadioGroup = ({ field, name, children, defaultChecked, ...props }) => (
    <RadioGroup {...field} {...props} name={name || field.name} defaultChecked={defaultChecked}>
        {children}
    </RadioGroup>
);

export const FormikTextField = ({ field, name, children, defaultValue, componentProps, ...props }) => (
    <MuiTextField {...field} {...props} name={name || field.name} defaultValue={defaultValue} {...componentProps} />
);

interface RadioProps {
    label?: string;
    value?: string;
}

export const Radio: React.FC<RadioProps> = ({ label, value }) => {
    return (
        <FormControlLabel
            classes={{
                label: "samim text-xs md:text-sm base-text-900 select-node",
            }}
            className="mx-0 px-0"
            value={value}
            control={<MuiRadio color="primary" className="base-text-700" />}
            label={label}
        />
    );
};
