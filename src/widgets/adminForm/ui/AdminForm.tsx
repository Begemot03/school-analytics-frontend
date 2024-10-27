import { FC, useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Form } from "@/shared/ui/form";
import { adminApi } from "@/shared/api/api";
import * as yup from "yup";
import { email, fio, password } from "@/shared/lib/validationEntities";
import { yupResolver } from "@hookform/resolvers/yup";
import "./AdminForm.css";

const schema = yup.object({
    fio,
    email,
    password,
});

export const AdminForm: FC = () => {
    const resolver = yupResolver(schema);
    const [loading, setLoading] = useState<boolean>(false);

    const onSumbit = async (data: any) => {
        try {
            setLoading(true);
            data.username = data.email;
            await adminApi
                .post("new-teacher", {
                    body: JSON.stringify(data),
                })
                .json();
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form defaultValues={{ resolver }} onSubmit={onSumbit}>
            <Input name='fio' placeholder='ФИО преподавателя' />
            <Input name='email' placeholder='Электронная почта' />
            <Input name='password' type='password' placeholder='Пароль' />
            <Button
                loading={loading}
                className='button admin__button'
                type='submit'>
                Добавить
            </Button>
        </Form>
    );
};
