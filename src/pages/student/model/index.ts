import { create } from "zustand";

type StudentStore = {
    studentInfo: {
        studentId: string;
        studentName: string;
    };
    attendanceData: {
        date: string;
        subject: string;
        present: boolean;
    }[];
    gradeData: {
        date: string;
        subject: string;
        grade: number;
    }[];
    behaviorData: {
        date: string;
        score: number;
    }[];
    selData: {
        testName: string;
        score: number;
    }[];
    getAttendanceDataBySubject: (subject: string) => { subject: string; date: string; present: boolean }[];
    getGradeDataBySubjectAndDateRange: (
        subject: string,
        startDate: string,
        endDate: string
    ) => { subject: string; date: string; grade: number }[];
    getBehaviorDataByDateRange: (
        startDate: string,
        endDate: string
    ) => { date: string; score: number }[];
}

//@ts-ignore
export const useStudentStore = create<StudentStore>()((set, get) => ({
    studentInfo: {
        studentId: "12345",
        studentName: "Иван Иванов",
    },
    attendanceData: [
        {
            date: "2023-10-26",
            subject: "Математика",
            present: true
        },
        {
            date: "2023-10-27",
            subject: "Физика",
            present: false
        },
        {
            date: "2023-10-28",
            subject: "Химия",
            present: true
        },
        {
            date: "2023-10-29",
            subject: "История",
            present: true
        },
        {
            date: "2023-10-30",
            subject: "Математика",
            present: true
        },
        {
            date: "2023-10-31",
            subject: "Физика",
            present: true
        },
        {
            date: "2023-11-01",
            subject: "Химия",
            present: true
        },
        {
            date: "2023-11-02",
            subject: "История",
            present: false
        }
    ],
    gradeData: [
        {
            date: "2023-10-26",
            subject: "Математика",
            grade: 4
        },
        {
            date: "2023-10-27",
            subject: "Физика",
            grade: 3.5
        },
        {
            date: "2023-10-28",
            subject: "Химия",
            grade: 4.5
        },
        {
            date: "2023-10-29",
            subject: "История",
            grade: 4
        },
        {
            date: "2023-10-30",
            subject: "Математика",
            grade: 4.5
        },
        {
            date: "2023-10-31",
            subject: "Физика",
            grade: 4
        },
        {
            date: "2023-11-01",
            subject: "Химия",
            grade: 5
        },
        {
            date: "2023-11-02",
            subject: "История",
            grade: 3.5
        }
    ],
    behaviorData: [
        {
            date: "2023-10-26",
            score: 4
        },
        {
            date: "2023-10-27",
            score: 4.5
        },
        {
            date: "2023-10-28",
            score: 4
        },
        {
            date: "2023-10-29",
            score: 3.5
        },
        {
            date: "2023-10-30",
            score: 4
        },
        {
            date: "2023-10-31",
            score: 4.5
        },
        {
            date: "2023-11-01",
            score: 4
        },
        {
            date: "2023-11-02",
            score: 4
        }
    ],
    selData: [
        {
            testName: "SEL1",
            score: 80
        },
        {
            testName: "SEL2",
            score: 90
        },
        {
            testName: "SEL3",
            score: 75
        },
    ],
    getAttendanceDataBySubject: (subject) => {
        return get().attendanceData.filter(data => data.subject === subject);
    },
    
    getGradeDataBySubjectAndDateRange: (subject, startDate, endDate) => {
        return get().gradeData.filter(data =>
            data.subject === subject &&
            data.date >= startDate &&
            data.date <= endDate
        );
    },
    
    getBehaviorDataByDateRange: (startDate, endDate) => {
        return get().behaviorData.filter(data =>
            data.date >= startDate &&
            data.date <= endDate
        );
    }
}));