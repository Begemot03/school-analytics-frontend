import { authApi } from "@/shared/api/api";
import { createContext, FC, ReactNode, useMemo, useState } from "react";

type AuthProviderProps = {
    children: ReactNode;
};

type SignResponse = {
    token: string;
};

export const AuthContext = createContext<{
    isAuth: boolean;
    signin: (data: any) => Promise<void>;
    signout: () => Promise<void>;
    signup: (data: any) => Promise<void>;
}>({
    isAuth: false,
    signin: async () => {},
    signout: async () => {},
    signup: async () => {},
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(
        localStorage.getItem("token") != null
    );

    const sign = (_token: string): void => {
        if (_token) {
            setIsAuth(true);
            localStorage.setItem("token", _token);
        } else {
            setIsAuth(false);
            localStorage.removeItem("token");
        }
    };

    const signin = async (data: any) => {
        try {
            const response: SignResponse = await authApi
                .post("sign-in", {
                    body: JSON.stringify(data),
                })
                .json();

            sign(response.token);
        } catch (error) {
            console.error("Signin error:", error);
        }
    };

    const signout = async () => {
        setIsAuth(false);
        localStorage.removeItem("token");
    };

    const signup = async (data: any) => {
        try {
            const response: SignResponse = await authApi
                .post("sign-up", {
                    body: JSON.stringify(data),
                })
                .json();

            sign(response.token);
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    const contextValue = useMemo(
        () => ({
            isAuth,
            signin,
            signout,
            signup,
        }),
        [isAuth]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
