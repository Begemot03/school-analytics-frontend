import { FC } from "react";
import { AdminForm } from "@/widgets/adminForm";
import "./AdminPage.css";

export const AdminPage: FC = () => {
    return <>
        <div className="admin__container">
            <div className="admin__layout">
                <h1 className="admin__heading">Добавить преподателя</h1>
                <AdminForm />
            </div>
        </div>
    </>
}