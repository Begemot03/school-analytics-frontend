import { useAuth } from "@/shared/lib/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
};
