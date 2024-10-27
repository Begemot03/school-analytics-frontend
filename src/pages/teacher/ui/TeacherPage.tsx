import { FC, useState } from "react";
import { StudentList } from "@/widgets/studentList";
import { StatisticCharts } from "@/widgets/statisticCharts/ui/StatisticCharts";
import "./TeacherPage.css";

export const TeacherPage: FC = () => {
    const [students, _] = useState([
        { fio: 'Иванов Иван Иванович', id: 0 },
        { fio: 'Иванов Иван Иванович', id: 1 },
        { fio: 'Иванов Иван Иванович', id: 2 },
        { fio: 'Иванов Иван Иванович', id: 3 },
        { fio: 'Иванов Иван Иванович', id: 4 },
        { fio: 'Иванов Иван Иванович', id: 5 },
        { fio: 'Иванов Иван Иванович', id: 6 },
        { fio: 'Иванов Иван Иванович', id: 7 },
        { fio: 'Иванов Иван Иванович', id: 8 },
        { fio: 'Иванов Иван Иванович', id: 9 }
    ]);

    const classInfo = "9А";
    return <>
        <div className="teacher__statistics-header">
            <p>{classInfo} класс</p>
            <div>
                Дата c <input type="date" name="start" /> по <input type="date" name="end" />
            </div>
        </div>
        <StatisticCharts />
        <StudentList studentList={students} />
    </>
}