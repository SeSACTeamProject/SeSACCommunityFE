import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar';
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import JobCoordiPage from './Pages/JobCoordi/JobCoordiPage';

const App = () => {
  return (
    <BrowserRouter>
      {/* NavBar를 /login 경로를 제외한 페이지에서만 렌더링 */}
      {location.pathname !== "/login" && <NavBar />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobcoordi" element={<JobCoordiPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
