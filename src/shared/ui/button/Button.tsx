import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return <button className="button" {...rest}>{children}</button>;
};
