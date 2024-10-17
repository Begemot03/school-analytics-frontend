import { FC, ReactNode } from "react";
import "./container.css";

type props = {
    children: ReactNode;
};

export const Container: FC<props> = ({ children }) => {
    return <div className='container'>{children}</div>;
};
