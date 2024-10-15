import { authApi } from "@/shared/api/api";
import {
    createContext,
    FC,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from "react";

type props = {
    children: ReactNode;
};

export const AuthContext = createContext<{
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}>({
    token: null,
    setToken: () => {}
});

export const AuthProvider: FC<props> = ({ children }: props) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    useEffect(() => {
        if (token) {
            authApi.extend({
                headers: {
                    Authorization: "Brearer" + token,
                },
            });
            localStorage.setItem("token", token);
        } else {
            authApi.extend({
                headers: {
                    Authorization: "",
                },
            });
            localStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
