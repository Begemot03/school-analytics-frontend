import { FC, InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    register?: UseFormRegister<FieldValues>;
};

export const Input: FC<InputProps> = ({ register, name, ...rest }) => {
    if (!register) return <input {...rest} />;
    return <input {...register(name)} {...rest} />;
};
