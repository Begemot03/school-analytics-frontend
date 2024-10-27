import { FC, SelectHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    name: string;
    error?: { message: string };
    register?: UseFormRegister<FieldValues>;
    options: string[];
};

export const Select: FC<SelectProps> = ({
    register,
    options,
    name,
    ...rest
}) => {
    if (!register)
        return (
            <select {...rest}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        );

    return (
        <select {...register(name)} {...rest}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
