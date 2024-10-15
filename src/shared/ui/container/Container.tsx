import { FC, ReactNode } from "react";

type props = {
    children: ReactNode;
};

export const Container: FC<props> = ({ children }) => {
    return <div className='container'>{children}</div>;
};
