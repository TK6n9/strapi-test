import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
// import { useHistory } from "react-router-dom";
import "./index.css";

// const instance = axios.create({
//   baseURL: process.env.STRAPI_ADMIN_BACKEND_URL,
// });

const HomePage = (data) => {
  // const [info, setInfo] = useState();
  // const [markers, setMarkers] = useState([]);
  // const [map, setMap] = useState();

  // let history = useHistory();
  let fullAddress = data.address;
  let extraAddress = "";

  if (data.addressType === "R") {
    if (data.bname !== "") {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  }
  console.log(data);

  // useEffect(() => {
  //   if (!map) return;
  //   const ps = new kakao.maps.services.Places();

  //   ps.keywordSearch("", (data, status, _pagination) => {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //       // LatLngBounds 객체에 좌표를 추가합니다
  //       const bounds = new kakao.maps.LatLngBounds();
  //       let markers = [];

  //       for (var i = 0; i < data.length; i++) {
  //         // @ts-ignore
  //         markers.push({
  //           position: {
  //             lat: data[i].y,
  //             lng: data[i].x,
  //           },
  //           content: data[i].place_name,
  //         });
  //         // @ts-ignore
  //         bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //       }
  //       setMarkers(markers);

  //       // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //       map.setBounds(bounds);
  //     }
  //   });
  // }, [map]);

  // axios.post("http://localhost:1337/api/address1s", {
  //   data: {
  //     adress1: data.address,
  //   },
  // });

  return (
    <>
      <DaumPostcode onComplete={HomePage} />

      {/* <div>
        <button>돌아가</button>
        <div id="MapLocation">
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "50%", height: "300px" }}
          >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
              <div style={{ color: "#000" }}>aaaa{data.address}</div>
            </MapMarker>
          </Map>
        </div>
      </div> */}
      {/* <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          margin: "0 auto",
          width: "30%",
          height: "250px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map> */}
    </>
  );
};

// async function testadress(data) {
//   try {
//     await axios
//       .post(`http://localhost:1337/api/addresses`, {
//         data: {
//           address: data.address,
//         },
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log("에러발생");
//         console.log(err);
//       });
//   } catch (e) {
//     console.log(e);
//   }
// }

export default HomePage;
