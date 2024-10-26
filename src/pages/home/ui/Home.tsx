import { FC, useState } from "react";
import { api } from "@/shared/api/api";
import { Button } from "@/shared/ui/button";
import { useAuthStore } from "@/app/stores/authStore";
import { useShallow } from "zustand/shallow";

export const HomePage: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [userRole, userEmail] = useAuthStore(
        useShallow((state) => [state.userRole, state.userEmail])
    );

    const getAdmin = async () => {
        try {
            setLoading(true);
            await api.get("example/get-admin");
        } catch (error) {
            console.error("Error fetch");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div>Home page {userEmail && userEmail}</div>
            {userRole != "ROLE_ADMIN" ? (
                <>
                    <Button loading={loading} onClick={getAdmin}>
                        Получить админку
                    </Button>
                    <span>"Пока не админ"</span>
                </>
            ) : (
                <>
                    <span>Уже админ</span>
                </>
            )}
        </>
    );
};
