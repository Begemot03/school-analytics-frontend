import { FC } from "react";
import { AttendaceSection } from "@/pages/student/ui/attendanceSection";
import { GradeSection } from "@/pages/student/ui/gradeSection";
import { BehaviorSection } from "@/pages/student/ui/behaviorSection";

export const StudentPage: FC = () => {
    return (
        <div>
            <AttendaceSection />
            <GradeSection />
            <BehaviorSection />
        </div>
    );
};
