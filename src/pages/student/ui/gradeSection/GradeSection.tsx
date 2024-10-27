import { useStudentStore } from "@/pages/student/model";
import { FC, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

export const GradeSection: FC = () => {
    const [subject, setSubject] = useState("Математика");
    const [startDate, setStartDate] = useState("2023-10-26");
    const [endDate, setEndDate] = useState("2023-11-02");

    const getGradeDataBySubjectAndDateRange = useStudentStore(
        (state) => state.getGradeDataBySubjectAndDateRange
    );
    const [gradeData, setGradeData] = useState<
        {
            date: string;
            subject: string;
            grade: number;
        }[]
    >([]);

    useEffect(() => {
        setGradeData(
            getGradeDataBySubjectAndDateRange(subject, startDate, endDate)
        );
    }, [subject, startDate, endDate, getGradeDataBySubjectAndDateRange]);

    const gradeChartData = {
        labels: gradeData.map((data) => data.date),
        datasets: [
            {
                data: gradeData.map((data) => data.grade),
                backgroundColor: gradeData.map(
                    () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`
                ),
            },
        ],
    };
    return (
        <>
            <div>
                <label>Предмет:</label>
                <select onChange={(e) => setSubject(e.target.value)}>
                    <option value='Математика'>Математика</option>
                    <option value='Физика'>Физика</option>
                </select>

                <label>Начальная дата:</label>
                <input
                    type='date'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />

                <label>Конечная дата:</label>
                <input
                    type='date'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <h3>Оценки</h3>
            <div style={{ display: "flex" }}>
                <Pie data={gradeChartData} />
                <table style={{ marginLeft: "20px" }}>
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Предмет</th>
                            <th>Оценка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gradeData.map((data, idx) => (
                            <tr key={idx}>
                                <td>{data.date}</td>
                                <td>{data.subject}</td>
                                <td>{data.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
