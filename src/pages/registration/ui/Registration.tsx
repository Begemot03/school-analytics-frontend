import { RegistrationFormData } from "@/pages/registration/model";
import { authApi } from "@/shared/api/api";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@/shared/ui";

export const RegistrationPage: FC = () => {
    const { handleSubmit } = useForm<RegistrationFormData>();
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
            <Input
                name='username'
                placeholder='Имя пользователя'
                rules={{
                    minLength: 5,
                    maxLength: 50,
                }}
            />
            <Input
                name='emai'
                type='email'
                placeholder='Email'
                rules={{
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                    minLength: 5,
                    maxLength: 255,
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