import React, { useEffect, useRef } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css"; // 기본 스타일

const CalendarApp = () => {
    const calendarRef = useRef(null); // 캘린더를 렌더링할 DOM 요소

    useEffect(() => {
        // 캘린더 인스턴스 생성
        const calendar = new Calendar(calendarRef.current, {
            defaultView: "month", // 기본 월간 달력
            useDetailPopup: true, // 일정 상세 팝업 활성화
            useFormPopup: true, // 일정 추가 팝업 활성화
            calendars: [
                { id: "1", name: "My Calendar", backgroundColor: "#03bd9e" },
                { id: "2", name: "Work", backgroundColor: "#ff5583" },
            ],
        });

        // 샘플 일정(이제 이거 백에서 받아야됨)
        calendar.createEvents([
            {
                id: "1",
                calendarId: "1",
                title: "ui회의",
                category: "time",
                // start: new Date(),  // 현재시각
                start: new Date("2025-03-26T19:00:00"), // T는 날짜랑 시간 구분자자
                // end: new Date(new Date().setHours(new Date().getHours() + 2)),  // 에서 2시간 뒤
                end: new Date("2025-03-26T20:00:00"),
            },
            {
                id: "2",
                calendarId: "2",
                title: "회의",
                category: "time",
                start: new Date(new Date().setDate(new Date().getDate() + 1)),
                // CalendarApp.jsx:36  Uncaught TypeError: (intermediate value).setDate(...).setHours is not a function
                // end: new Date(new Date().setDate(new Date().getDate() + 1).setHours(12)),
                end: new Date(new Date().setHours(new Date().getHours() + 3))
            },
        ]);

        return () => {
            calendar.destroy(); // 컴포넌트 언마운트 시 캘린더 제거
        };
    }, []);

    return (
        <div className="calendar-container">
            {/* 캘린더가 그려질 요소 */}
            <div ref={calendarRef} style={{ height: "800px" }} />
        </div>
    );
};

export default CalendarApp;
