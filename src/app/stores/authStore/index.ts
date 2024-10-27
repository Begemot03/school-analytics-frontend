import { authApi } from "@/shared/api/api";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Role = "ROLE_STUDENT" | "ROLE_TEACHER" | "ROLE_ADMIN" | "ROLE_GUEST";

type AuthState = {
    isAuth: boolean;
    userEmail: string;
    userRole: Role;
    sign: (url: string, data: any) => Promise<void>;
    signin: (data: any) => Promise<void>;
    signout: () => Promise<void>;
    signup: (data: any) => Promise<void>;
    setRole: (newRole: Role) => void;
};

type SignResponse = {
    token: string;
};

export const useAuthStore = create<AuthState>()(
    persist((set, get) => ({
        isAuth: localStorage.getItem("token") != null,
        userEmail: localStorage.getItem("token") == null ? "" : (jwtDecode(localStorage.getItem("token") as string) as any).email,
        userRole: localStorage.getItem("token") == null ? "ROLE_GUEST" : (jwtDecode(localStorage.getItem("token") as string) as any).role as Role,
        sign: async (url, data) => {
            try {
                const response = await authApi
                    .post(url, {
                        body: JSON.stringify(data),
                    })
                    .json<SignResponse>();

                localStorage.setItem("token", response.token);
                const jwt = jwtDecode(response.token) as any;
                set(() => ({ isAuth: true, userRole: jwt.role, userEmail: jwt.email }));
            } catch (e) {
                console.error(`Failed on ${url}: ${e}`);
                set(() => ({ isAuth: false, userRole: "ROLE_GUEST", userEmail: "" }));
            }
        },
        signin: async (data) => {
            await get().sign("sign-in", data);
        },
        signup: async (data) => {
            await get().sign("sign-up", data);
        },
        signout: async () => {
            localStorage.removeItem("token");
            set(() => ({ isAuth: false, userRole: "ROLE_GUEST", userEmail: "" }));
        },
        setRole: (newRole: Role) => {
            set(() => ({ userRole: newRole }));
        },
    }), {
        name: "auth-storage",
        storage: createJSONStorage(() => sessionStorage),
    }),
);