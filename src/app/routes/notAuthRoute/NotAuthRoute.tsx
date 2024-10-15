import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const NotAuthRoute: FC = () => {
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};
