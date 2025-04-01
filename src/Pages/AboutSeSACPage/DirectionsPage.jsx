import React, { useState } from "react";
// import MapComponent from './Components/MapComponent'; // 경로 수정
import "../../Assets/styles/DirectionsPage.css";


const locations = [
  {
    name: "SeSAC 영등포 캠퍼스",
    lat: 37.52644,
    lng: 126.89632,
    address: "서울특별시 영등포구 선유로49길 10 10층",
    contact: "02-3667-7303~4",
  },
  {
    name: "SeSAC 강남 캠퍼스",
    lat: 37.49809,
    lng: 127.02761,
    address: "서울특별시 강남구 테헤란로 10",
    contact: "02-1234-5678",
  },
  // 다른 지점 추가 가능
];

function DirectionsPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="container">
      <h1>SeSAC 오시는 길</h1>

      {/* 버튼 목록 */}
      <div className="button-container">
        {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => setSelectedLocation(location)}
            className={`location-button ${selectedLocation.name === location.name ? "active" : ""}`}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* 네이버 지도 */}
      {/* <MapComponent location={selectedLocation} /> */}

      {/* 카카오 지도 */}

      {/* 주소 및 연락처 */}
      <div className="info-box">
        <h2>{selectedLocation.name}</h2>
        <p>📍 주소: {selectedLocation.address}</p>
        <p>📞 연락처: {selectedLocation.contact}</p>
      </div>
    </div>
  );
}

export default DirectionsPage;
