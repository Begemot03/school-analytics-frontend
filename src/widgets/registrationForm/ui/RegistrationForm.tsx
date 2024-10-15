import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Form } from "@/shared/ui/form";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().min(5).max(50).required(),
    email: yup.string().min(5).max(255).email().required(),
    password: yup.string().min(0).max(255).required(),
});

export const RegistrationForm: FC = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const resolver = yupResolver(schema);

    const onSumbit = async (data: object) => {
        await signup(data);
        navigate("/", { replace: true });
    };

    return (
        <Form defaultValues={{ resolver }} onSubmit={onSumbit}>
            <Input name='username' placeholder='Имя пользователя' />
            <Input name='email' placeholder='Email' />
            <Input name='password' type='password' placeholder='Пароль' />
            <Button type='submit'>Войти</Button>
        </Form>
    );
};
