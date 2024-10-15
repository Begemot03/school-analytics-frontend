import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Logout: FC = () => {
    const { signout } = useAuth();

    useEffect(() => {
        const logout = async () => {
            await signout();
        };

        logout();
    }, [signout]);

    return <Navigate to='/' />;
};
