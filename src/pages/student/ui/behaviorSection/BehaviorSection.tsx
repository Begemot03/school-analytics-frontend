import { useStudentStore } from "@/pages/student/model";
import { FC, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

export const BehaviorSection: FC = () => {
    const [subject, setSubject] = useState("Математика");
    const [startDate, setStartDate] = useState("2023-10-26");
    const [endDate, setEndDate] = useState("2023-11-02");

    const getBehaviorDataByDateRange = useStudentStore(
        (state) => state.getBehaviorDataByDateRange
    );
    const [behaviorData, setBehaviorData] = useState<
        {
            date: string;
            score: number;
        }[]
    >([]);

    useEffect(() => {
        setBehaviorData(getBehaviorDataByDateRange(startDate, endDate));
    }, [startDate, endDate, getBehaviorDataByDateRange]);

    const behaviorScoresCount = behaviorData.reduce<any>((acc, data) => {
        acc[data.score] = (acc[data.score] || 0) + 1;
        return acc;
    }, {});

    const behaviorChartData = {
        labels: Object.keys(behaviorScoresCount),
        datasets: [
            {
                data: Object.values(behaviorScoresCount),
                backgroundColor: Object.keys(behaviorScoresCount).map(
                    () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`
                ),
            },
        ],
    };

    return (
        <>
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
            <h3>Поведение</h3>
            <div style={{ display: "flex" }}>
                <Pie data={behaviorChartData} />
                <table style={{ marginLeft: "20px" }}>
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Оценка поведения</th>
                        </tr>
                    </thead>
                    <tbody>
                        {behaviorData.map((data, idx) => (
                            <tr key={idx}>
                                <td>{data.date}</td>
                                <td>{data.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
