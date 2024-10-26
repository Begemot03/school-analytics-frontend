import { FC, useState } from "react";
import { StudentList } from "@/widgets/studentList";
import "./TeacherPage.css";

export const TeacherPage: FC = () => {
    const [students, _] = useState([
        { fio: 'Sanford', id: 0 },
        { fio: 'Lupe', id: 1 },
        { fio: 'Erika', id: 2 },
        { fio: 'Edgar', id: 3 },
        { fio: 'Willa', id: 4 },
        { fio: 'Guillermo', id: 5 },
        { fio: 'Kayli', id: 6 },
        { fio: 'Jerel', id: 7 },
        { fio: 'Henry', id: 8 },
        { fio: 'Ebba', id: 9 }
    ]);
    return <div className="teacher__container">
        <h1 className="teacher__heading">Страница учителя</h1>
        <h2 className="teacher__heading">Список учеников</h2>
        <StudentList studentList={students} />
    </div>
}