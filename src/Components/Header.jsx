import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import useLoginModalStore from "../Store/AuthModalStore";
import LoginModal from "../Modal/AuthModal/AuthModal";

const Header = () => {
  const { isOpen, openModal } = useLoginModalStore();
  return (
    // <header className="fixed h-10 top-0 left-0 w-full flex justify-between items-center p-3 z-20 bg-red-300">
    <header className="relative h-10 top-0 left-0 w-full flex justify-between items-center p-3 z-20 bg-red-300">
      {/* 로고(클릭 시 메인으로 이동) */}
      <div className="absolute top-0 left-0 h-16 bg-teal-300">
        <Link to="/">
          <img
            src={logo}
            alt="로고"
            className="object-contain hover:cursor-pointer"
          />
        </Link>
      </div>

      {/* 메뉴 */}
      {/* <div className="absolute top-2 right-4 flex space-x-4 text-sm"> */}
      <div className="absolute flex itesm-center right-4 space-x-4 text-sm">
        <Link to="/profile">마이페이지</Link>
        {/* <Link>로그인</Link> */}
        <button onClick={openModal}>로그인</button>
      </div>
      {isOpen && <LoginModal />}
    </header>
  );
};

export default Header;
