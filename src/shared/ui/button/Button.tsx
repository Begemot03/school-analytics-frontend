import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return <button {...rest}>{children}</button>;
};
