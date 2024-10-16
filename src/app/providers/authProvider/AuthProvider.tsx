import { api, authApi } from "@/shared/api/api";
import {
    createContext,
    FC,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from "react";

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
    signin: async () => { },
    signout: async () => { },
    signup: async () => { },
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );
    const [isAuth, setIsAuth] = useState(false);

    const sign = (_token: string): void => {
        setToken(_token);
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
        setToken(null);
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

    useEffect(() => {
        if (token) {
            api.extend({
                headers: {
                    Authorization: "Brearer" + token,
                },
            });
            setIsAuth(true);
            localStorage.setItem("token", token);
        } else {
            api.extend({
                headers: {
                    Authorization: "",
                },
            });
            setIsAuth(false);
            localStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            isAuth,
            signin,
            signout,
            signup,
        }),
        [token, isAuth]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
