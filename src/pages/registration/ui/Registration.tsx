import { RegistrationFormData } from "@/pages/registration/model";
import { authApi } from "@/shared/api/api";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const RegistrationPage: FC = () => {
    const { register, handleSubmit } = useForm<RegistrationFormData>();
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const onSumbit = async (data: object) => {
        const response: string = await authApi
            .post("sign-up", {
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
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                    minLength: 5,
                    maxLength: 255,
                })}
                type='email'
                placeholder='Email'
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
