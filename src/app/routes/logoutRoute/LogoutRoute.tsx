import { useAuthStore } from "@/app/stores/authStore";
import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Logout: FC = () => {
    const signout = useAuthStore((state) => state.signout);

    useEffect(() => {
        const logout = async () => {
            await signout();
        };

        logout();
    }, [signout]);

    return <Navigate to='/' />;
};
