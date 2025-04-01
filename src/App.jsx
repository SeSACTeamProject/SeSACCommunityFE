import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import MainPage from "./Pages/MainPage/MainPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import JobCoordiPage from "./Pages/JobCoordiPage/JobCoordiPage";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header & NavBar */}
      {/* 헤더랑 NavBar를 /login 경로를 제외한 페이지에서만 렌더링 */}
      {!isLoginPage && !isSignupPage && <Header />}
      {!isLoginPage && !isSignupPage && <NavBar />}
      {/* {!isLoginPage && !isSignupPage && <Banner />} */}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobcoordi" element={<JobCoordiPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
