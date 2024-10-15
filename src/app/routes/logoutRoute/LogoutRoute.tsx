import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { Navigate } from "react-router-dom";

export const Logout: FC = () => {
    const { token, setToken } = useAuth();

    if(token) {
        setToken("");
        localStorage.removeItem("token");
    }

    return <Navigate to="/login" />
} 