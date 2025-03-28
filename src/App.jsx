import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import MainPage from './Pages/MainPage/MainPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import JobCoordiPage from './Pages/JobCoordi/JobCoordiPage';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
      {/* 헤더랑 NavBar를 /login 경로를 제외한 페이지에서만 렌더링 */}
      {/* {location.pathname !== "/login" && <Header />}
      {location.pathname !== "/login" && <NavBar />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobcoordi" element={<JobCoordiPage />} />
      </Routes> */}
    </BrowserRouter>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return(
    <div className="min-h-screen flex flex-col">
      {/* Header & NavBar */}
      {!isLoginPage && !isSignupPage && <Header /> }
      {!isLoginPage && !isSignupPage && <NavBar />}

      {/* Header + NavBar 높이만큼 공간 확보 */}
      {/* {!isLoginPage && <div className="h-[100px]" />} */}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobcoordi" element={<JobCoordiPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
