import React from "react";
import TitleField from "./Components/TitleField";
import List from "./Components/List";

const ProfilePage = () => {
    return(
        <div>
            <TitleField text={"나의 마이페이지"} />
            {/* 여기 프로필 */}

            <TitleField text={"내가 쓴 글"} />
            <List type="myPosts" />

            <TitleField text={"스크랩"} />
            <List type="scraps" />

            <TitleField text={"회의실 예약 내역"} />
            <List type="reservations" />
        </div>
    );
};

export default ProfilePage;