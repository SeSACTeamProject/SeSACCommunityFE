import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import Intro from './IntroPage'; // Intro 컴포넌트 불러오기
import Roadmap from './RoadMapPage'; // Roadmap 컴포넌트 불러오기
import Directions from './DirectionsPage'; // Directions 컴포넌트 불러오기

function AboutSeSACPage() {
    const location = useLocation();
    const tabs = [
      { name: "SeSAC 소개", path: "/about/intro" },
      { name: "교육 로드맵", path: "/about/roadmap" },
      { name: "SeSAC 오시는 길", path: "/about/directions" }
    ];
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">About SeSAC</h1>
        <div className="flex space-x-4 border-b pb-2">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `px-4 py-2 ${isActive ? "border-b-2 border-green-600 text-green-600 font-semibold" : "text-gray-700"}`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-4">
          <Routes>
            <Route path="intro" element={<Intro />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="directions" element={<Directions />} />
          </Routes>
        </div>
      </div>
    );
  }




export default AboutSeSACPage;
  