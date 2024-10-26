import { Role, useAuthStore } from "@/app/stores/authStore";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useShallow } from "zustand/shallow";

type ProtectedRouteProps = {
    allowRoles?: Array<Role | "*">;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ allowRoles }) => {
    const [isAuth, userRole] = useAuthStore(
        useShallow((state) => [state.isAuth, state.userRole])
    );

    if (isAuth && allowRoles?.at(0) === "*") {
        return <Outlet />;
    }

    if (userRole && allowRoles?.includes(userRole)) {
        return <Outlet />;
    }

    return <Navigate to='/' replace />;
};
