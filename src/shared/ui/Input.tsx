import { FC } from 'react';
import { RegisterOptions } from 'react-hook-form';

type InputProps = {
    name: string;
    placeholder?: string;
    type?: string;
    rules?: RegisterOptions;
}

export const Input: FC<InputProps> = ({ name, placeholder, type, rules }) => {
    return (
        <input
            {...(rules && { register: { name, ...rules } })}
            type={type || 'text'}
            placeholder={placeholder}
        />
    );
};