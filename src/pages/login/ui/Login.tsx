import { authApi } from "@/shared/api/api";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "@/pages/login/model";

// {
// username: "jhonsdjhnond",
// email: "testmdasdil@mail.ru",
// password: "233ddsda24",
// }



export const LoginPage: FC = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();
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
            <input
                {...register("username", {
                    minLength: 5,
                    maxLength: 50,
                })}
                placeholder='Имя пользователя'
            />
            <input
                {...register("password", {
                    minLength: 0,
                    maxLength: 255,
                })}
                type='password'
                placeholder='Пароль'
            />
            <button type='submit'>Войти</button>
        </form>
    );
};
