import { FC, useEffect, useState } from "react";
import { StudentList } from "@/widgets/studentList";
import { StatisticCharts } from "@/widgets/statisticCharts/ui/StatisticCharts";
import "./TeacherPage.css";

export const TeacherPage: FC = () => {
    const [students, _] = useState([
        { fio: "Иванов Иван Иванович", id: 0 },
        { fio: "Иванов Иван Иванович", id: 1 },
        { fio: "Иванов Иван Иванович", id: 2 },
        { fio: "Иванов Иван Иванович", id: 3 },
        { fio: "Иванов Иван Иванович", id: 4 },
        { fio: "Иванов Иван Иванович", id: 5 },
        { fio: "Иванов Иван Иванович", id: 6 },
        { fio: "Иванов Иван Иванович", id: 7 },
        { fio: "Иванов Иван Иванович", id: 8 },
        { fio: "Иванов Иван Иванович", id: 9 },
    ]);
    return (
        <>
            <div className='teacher__container'>
                <h1 className='teacher__heading'>Страница учителя</h1>
                <h2 className='teacher__heading'>Список учеников</h2>
                <StudentList studentList={students} />
            </div>
        </>
    );
};
