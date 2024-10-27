import { FC } from "react";
import "./StatisticCharts.css";
import { Pie, Bar } from "react-chartjs-2";

interface ChartData {
    labels: string[];
    datasets: Array<{
        label: string;
        data: number[];
        backgroundColor: string;
    }>;
}

export const StatisticCharts: FC = () => {
    const AttendanceData = {
        datasets: [
            {
                data: [82, 18],
                label: "Посещаемость",
                backgroundColor: ["#84C7AE", "#7400AD"],
            },
        ],
    };

    const SELData = {
        datasets: [
            {
                data: [82, 18],
                label: "SEL",
                backgroundColor: ["#84C7AE", "#7400AD"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
                display: false,
            },
            title: {
                display: false,
                text: "Горизонтальный столбчатый график",
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    drawOnChartArea: false,
                },
                ticks: { autoSkip: true, maxTicksLimit: 0 },
            },
            y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    const data: ChartData = {
        labels: ["Успеваемость"],
        datasets: [
            {
                label: "Хорошие оценки",
                data: [4, 5],
                backgroundColor: "#84C7AE",
            },
            {
                label: "Неудовлетворительные оценки",
                data: [1],
                backgroundColor: "#7400AD",
            },
        ],
    };

    const bData: ChartData = {
        labels: ["Поведение"],
        datasets: [
            {
                label: "Хорошее поведение",
                data: [3],
                backgroundColor: "#84C7AE",
            },
            {
                label: "Неудовлетворительное поведение",
                data: [2],
                backgroundColor: "#7400AD",
            },
        ],
    };

    return (
        <div className='statistic__container'>
            <div className='statistic__pie-charts'>
                <div className='statistic__pie-chart'>
                    <Pie data={AttendanceData} />
                    <p className='statistic__pie-chart-p'>Посещаемость</p>
                </div>
                <div className='statistic__pie-chart'>
                    <Pie data={SELData} />
                    <p className='statistic__pie-chart-p'>SEL</p>
                </div>
            </div>
            <div className='statistic__bar-charts'>
                <Bar data={data} options={options} />
                <Bar data={bData} options={options} />
            </div>
        </div>
    );
};
