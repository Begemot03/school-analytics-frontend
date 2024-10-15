import { useAuth } from "@/shared/lib/auth/useAuth";
import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().min(5).max(50).required(),
    password: yup.string().min(0).max(255).required(),
});

export const LoginForm: FC = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();
    const resolver = yupResolver(schema);

    const onSumbit = async (data: object) => {
        await signin(data);
        navigate("/", { replace: true });
    };

    return (
        <Form defaultValues={{ resolver }} onSubmit={onSumbit}>
            <Input name='username' placeholder='Имя пользователя' />
            <Input name='password' type='password' placeholder='Пароль' />
            <Button type='submit'>Войти</Button>
        </Form>
    );
};
