import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { SpinLoader } from "@/shared/ui/loaders/spinLoader";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    loading?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, loading, ...rest }) => {
    return (
        <>
            <div className='button__wrapper'>
                <button className='button' {...rest}>
                    {children}
                </button>
                {loading && <SpinLoader />}
            </div>
        </>
    );
};
