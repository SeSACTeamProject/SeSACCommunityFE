import React, { useState, useEffect } from "react";

const SignupStep6 = ({ onCondition }) => {
  // 더미 데이터
  const campuses = [
    { id: 1, name: "서울 캠퍼스" },
    { id: 2, name: "부산 캠퍼스" },
    { id: 3, name: "대전 캠퍼스" },
  ];

  const courses = {
    1: [
      { id: 1, name: "프론트엔드 개발" },
      { id: 2, name: "백엔드 개발" },
      { id: 3, name: "풀스택 개발" },
    ],
    2: [
      { id: 4, name: "모바일 개발" },
      { id: 5, name: "디지털 마케팅" },
    ],
    3: [
      { id: 6, name: "데이터 사이언스" },
      { id: 7, name: "AI 개발" },
    ],
  };

  const [selectedCampus, setSelectedCampus] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCampusChange = (e) => {
    const campusId = parseInt(e.target.value);
    setSelectedCampus(campusId); // 캠퍼스 선택 시 해당 캠퍼스에 맞는 과정들을 표시
    setSelectedCourse(""); // 캠퍼스 변경 시 선택된 과정 초기화
  };

  useEffect(() => {
    if (selectedCampus !== null && selectedCourse) {
      onCondition(true);
    }
  }, [selectedCampus, selectedCourse]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-bold text-left">캠퍼스를 선택해주세요.</p>
        <p className="text-sm text-left">
          교육을 들은 캠퍼스와 과정을 선택해주세요.
        </p>
      </div>

      <div>
        <p className="text-sm text-left">캠퍼스</p>
        <select
          value={selectedCampus || ""}
          onChange={handleCampusChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="" disabled>
            캠퍼스를 선택해주세요
          </option>
          {campuses.map((campus) => (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCampus && (
        <div>
          <p className="text-sm text-left">과정</p>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              과정 선택
            </option>
            {courses[selectedCampus]?.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default SignupStep6;
