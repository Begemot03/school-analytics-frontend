import { authApi } from "@/shared/api/api";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "@/pages/login/model";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";

// {
// username: "jhonsdjhnond",
// email: "testmdasdil@mail.ru",
// password: "233ddsda24",
// }



export const LoginPage: FC = () => {
    const { handleSubmit } = useForm<LoginFormData>();
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const onSumbit = async (data: object) => {
        const response: string = await authApi
            .post("sign-in", {
                body: JSON.stringify(data),
            })
            .json();

        //@ts-ignore
        setToken(response.token);
        navigate("/", { replace: true });
    };

    return (
        <form onSubmit={handleSubmit(onSumbit)}>
            <Input
                name='username'
                placeholder='Имя пользователя'
                rules={{
                    minLength: 5,
                    maxLength: 50,
                }}
            />
            <Input
                name='password'
                type='password'
                placeholder='Пароль'
                rules={{
                    minLength: 0,
                    maxLength: 255,
                }}
            />
            <Button name='Войти' type='submit' />
        </form>
    );
};