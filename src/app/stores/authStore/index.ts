import { authApi } from "@/shared/api/api";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Role = "ROLE_STUDENT" | "ROLE_TEACHER" | "ROLE_ADMIN" | undefined;

type AuthState = {
    isAuth: boolean;
    userEmail: string | undefined;
    userRole: Role;
    sign: (url: string, data: any) => Promise<void>;
    signin: (data: any) => Promise<void>;
    signout: () => Promise<void>;
    signup: (data: any) => Promise<void>;
};

type SignResponse = {
    token: string;
};

const TEST_TOKEN = "eyJhbGciOiJSUzI1NiIsIng1dCI6IjdkRC1nZWNOZ1gxWmY3R0xrT3ZwT0IyZGNWQSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2NvbnRvc28uY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTQ4MTc0N2YtNWRhNy00NTM4LWNiYmUtNjdlNTdmN2QyMTRlLyIsIm5iZiI6MTM5MTIxMDg1MCwiZXhwIjoxMzkxMjE0NDUwLCJzdWIiOiIyMTc0OWRhYWUyYTkxMTM3YzI1OTE5MTYyMmZhMSJ9.C4Ny4LeVjEEEybcA1SVaFYFS6nH-Ezae_RrTXUYInjXGt-vBOkAa2ryb-kpOlzU_R4Ydce9tKDNp1qZTomXgHjl-cKybAz0Ut90-dlWgXGvJYFkWRXJ4J0JyS893EDwTEHYaAZH_lCBvoYPhXexD2yt1b-73xSP6oxVlc_sMvz3DY__1Y_OyvbYrThHnHglxvjh88x_lX7RN-Bq82ztumxy97rTWaa_1WJgYuy7h7okD24FtsD9PPLYAply0ygl31ReI0FZOdX12Hl4THJm4uI_4_bPXL6YR2oZhYWp-4POWIPHzG9c_GL8asBjoDY9F5q1ykQiotUBESoMML7_N1g";

export const useAuthStore = create<AuthState>()(
    persist((set, get) => ({
        isAuth: localStorage.getItem("token") != null,
        userEmail: (jwtDecode(localStorage.getItem("token") || TEST_TOKEN) as any).email,
        userRole: (jwtDecode(localStorage.getItem("token") || TEST_TOKEN) as any).role,
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
                set(() => ({ isAuth: false, userRole: undefined, userEmail: undefined }));
            }
        },
        signin: async (data) => {
            await get().sign("sign-in", data);
        },
        signup: async (data) => {
            await get().sign("sign-in", data);
        },
        signout: async () => {
            localStorage.removeItem("token");
            set(() => ({ isAuth: false, userRole: undefined, userEmail: undefined }));
        },
    }), {
        name: "auth-storage",
        storage: createJSONStorage(() => sessionStorage),
    }),
);