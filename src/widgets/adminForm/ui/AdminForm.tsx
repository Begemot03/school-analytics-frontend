import { FC } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Form } from "@/shared/ui/form";
import { api } from "@/shared/api/api";
import "./AdminForm.css";

export const AdminForm: FC = () => {

    const onSumbit = async (data: any) => {
        try {
            await api.post("admin/new-teacher", {
                body: JSON.stringify(data),
            })
                .json();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <Form onSubmit={onSumbit}>
        <Input name="username" placeholder="Имя пользователя" />
        <Input name="fio" placeholder="ФИО преподавателя" />
        <Input name="email" placeholder="Электронная почта" />
        <Input name="password" type='password' placeholder="Пароль" />
        <Button className="button admin__button" type='submit'>Добавить</Button>
    </Form>
}