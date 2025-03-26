import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useNavBarStore from "../Store/NavBarStore";

const NavBar = () => {
    // const { isMenuOpen, toggleMenu } = useNavBarStore();
    // nav>ul 크기 동일하게 나누고
    // 로고추가
    // 맨위우측에 작ㄱ ㅔ마이페이지 이런거 있는건 헤더로 따로 마ㅣㄴ들어서 추가를 해야하는지...?

    return(
        <nav className="fixed top-0 left-0 w-full p-2 bg-amber-300 z-10">
            <ul className="flex justify-center space-x-6">
                <li className="relative group">
                    <div className="hover:bg-green-200 hover:cursor-pointer">
                        커뮤니티
                    </div>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-b-lg">
                        <li>
                            <Link className="block px-4 py-2 hover:bg-green-100">모집</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-green-100">진행 상황 공유</Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <div className="hover:bg-green-200 hover:cursor-pointer">
                        공지사항
                    </div>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-b-lg">
                        <li>
                            <Link className="block px-4 py-2 hover:bg-green-100">test1</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-green-100">test2</Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group">
                    <div className="hover:bg-green-200 hover:cursor-pointer">
                        About SeSAC
                    </div>
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-b-lg">
                        <li>
                            <Link className="block px-4 py-2 hover:bg-green-100">test1</Link>
                        </li>
                        <li>
                            <Link className="block px-4 py-2 hover:bg-green-100">test2</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

// https://sesac.seoul.kr/common/menu/html/900006004001/detail.do
// https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars

/*
<li class="">
    <a href="/course/active/online/list.do">온라인</a>
    <ul style="display: none; height: 190px; padding-top: 20px; margin-top: 0px; padding-bottom: 20px; margin-bottom: 0px;">
        <li>
            <a href="/course/active/online/list.do">전체과정</a>
        </li>
        <li>
            <a href="/course/active/agroup/list.do">A 그룹 과정</a>
        </li>
        <li>
            <a href="/course/active/preagroup/list.do">Pre-A 그룹 과정<img class="new" src="/static/common/images/www/icon/ic_new.png" alt=""></a>
        </li>
        <li>
            <a href="/course/active/postagroup/list.do">Post-A 그룹 과정<img class="new" src="/static/common/images/www/icon/ic_new.png" alt=""></a>
        </li>
    </ul>
</li>
*/