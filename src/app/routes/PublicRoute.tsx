import { FC, ReactNode } from "react";

type props = {
    children: ReactNode;
};

export const PublicRoute: FC<props> = ({ children }: props) => {
    return children;
};
