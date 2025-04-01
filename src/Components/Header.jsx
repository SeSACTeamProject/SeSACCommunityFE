import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Header = () => {
    return(
        // <header className="fixed h-10 top-0 left-0 w-full flex justify-between items-center p-3 z-20 bg-red-300">
        <header className="relative h-10 top-0 left-0 w-full flex justify-between items-center p-3 z-20 bg-red-300">
            {/* 로고(클릭 시 메인으로 이동) */}
            <div className="absolute top-0 left-0 h-16 bg-teal-300">
                <Link to="/">
                    <img 
                        src={logo}
                        alt="로고" 
                        className="object-contain hover:cursor-pointer"/>
                </Link>
            </div>

            {/* 메뉴 */}
            {/* <div className="absolute top-2 right-4 flex space-x-4 text-sm"> */}
            <div className="absolute flex itesm-center right-4 space-x-4 text-sm">
                <Link>마이페이지</Link>
                <Link>로그아웃</Link>
            </div>

        
        </header>
    );
};

export default Header;