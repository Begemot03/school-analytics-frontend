import { AuthContext } from "@/app/providers/authProvider";
import { useContext } from "react";

export const useAuth = () => {
    return useContext(AuthContext);
};
