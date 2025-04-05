import React, { useState } from "react";

const SignupStep5 = ({ onCondition }) => {
  const skills = [
    { id: 1, name: "개발" },
    { id: 2, name: "디자인" },
    { id: 3, name: "기획" },
    { id: 4, name: "마케팅" },
  ];

  const languages = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
    { id: 4, name: "C#" },
    { id: 5, name: "Ruby" },
    { id: 6, name: "Go" },
    { id: 7, name: "Swift" },
    { id: 8, name: "Kotlin" },
    { id: 9, name: "TypeScript" },
    { id: 10, name: "PHP" },
    { id: 11, name: "C++" },
    { id: 12, name: "Rust" },
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleSkillClick = (skillName) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skillName)
        ? prevSkills.filter((skill) => skill !== skillName)
        : [...prevSkills, skillName]
    );
  };

  const handleLanguageClick = (languageName) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(languageName)
        ? prevLanguages.filter((language) => language !== languageName)
        : [...prevLanguages, languageName]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-bold text-left">스킬을 선택해주세요.</p>
        <p className="text-sm text-left">보유하고 있는 스킬을 선택해주세요</p>
      </div>

      <div>
        {/* 스킬 선택 버튼 */}
        <div className="space-x-4">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => handleSkillClick(skill.name)}
              className={`px-4 py-2 rounded-full ${
                selectedSkills.includes(skill.name)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-48 overflow-y-auto">
        {/* 언어 선택 버튼 */}
        <div className="space-x-4">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleLanguageClick(language.name)}
              className={`px-4 py-2 rounded-full ${
                selectedLanguages.includes(language.name)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupStep5;
