import { useAuth } from "@/shared/lib/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
};