import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="relative h-24 w-full bg-amber-300 z-10">
            {/* 반응형 설정 필요?(햄버거버튼?) */}
            <ul className="flex justify-center items-center h-full bg-violet-200 text-lg">
                <li className="relative group bg-fuchsia-500 w-48 h-full flex items-center justify-center hover:bg-green-200 hover:cursor-pointer">
                    {/* <div className="hover:bg-green-200 hover:cursor-pointer"> */}
                    <div>
                        커뮤니티
                    </div>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-b-lg top-full w-48">
                        <li>
                            <Link className="block px-4 py-4 hover:bg-green-100">모집</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-4 hover:bg-green-100">진행 상황 공유</Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group bg-gray-100 w-48 h-full flex items-center justify-center hover:bg-green-200 hover:cursor-pointer">
                    {/* <div className="hover:bg-green-200 hover:cursor-pointer"> */}
                    <div>
                        공지사항
                    </div>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-b-lg top-full w-48">
                        <li>
                            <Link className="block px-4 py-4 hover:bg-green-100">test1</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-4 hover:bg-green-100">test2</Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group bg-blue-200 h-full flex items-center justify-center">
                    <div className="hover:bg-green-200 hover:cursor-pointer p-4">
                        About SeSAC
                    </div>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-b-lg w-40">
                        <li>
                            <Link to="/about/intro" className="block px-4 py-2 hover:bg-green-100">SeSAC 소개</Link>
                        </li>
                        <li>
                            <Link to="/about/roadmap" className="block px-4 py-2 hover:bg-green-100">교육 로드맵</Link>
                        </li>
                        <li>
                            <Link to="/about/directions" className="block px-4 py-2 hover:bg-green-100">오시는 길</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;