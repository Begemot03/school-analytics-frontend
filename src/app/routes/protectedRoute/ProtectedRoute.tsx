import { useAuthStore } from "@/app/stores/authStore";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useShallow } from "zustand/shallow";

type ProtectedRouteProps = {
    allowRoles?: string[];
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ allowRoles }) => {
    const [isAuth, userRole] = useAuthStore(
        useShallow((state) => [state.isAuth, state.userRole])
    );

    if (!isAuth) {
        return <Navigate to='/login' replace />;
    }

    if (userRole && allowRoles?.includes(userRole)) {
        return <Outlet />;
    }

    return <Navigate to='/login' replace />;
};
