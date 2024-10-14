import { FC } from 'react';

type ButtonProps = {
    name: string;
    type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<ButtonProps> = ({ name, type }) => {
    return (
        <button type={type || 'submit'}>
            {name}
        </button>
    );
}