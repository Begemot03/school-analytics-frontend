import { authApi } from "@/shared/api/api";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const RegistrationPage: FC = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response: string = await authApi
            .post("sign-up", {
                body: JSON.stringify({
                    username: "jhonsdjhnond",
                    email: "testmdasdil@mail.ru",
                    password: "233ddsda24",
                }),
            })
            .json();

        //@ts-ignore
        setToken(response.token);
        navigate("/", { replace: true });
    };

    return (
        <div>
            <input type='text' placeholder='Логин' />
            <input type='text' placeholder='Пароль' />
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};
