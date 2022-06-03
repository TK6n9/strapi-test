import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect, useCallback, useRef } from "react";
import axios from "axios";
// import { toPng } from "html-to-image";
// import html2pdf from "html2pdf.js";
function KakaoMap(props) {
  function MapClick() {
    try {
      axios
        .post(`http://localhost:1337/api/address-infos`, {
          data: {
            addressName: JSON.stringify(props.주소전달),
            addressX: JSON.stringify(props.엑스전달),
            addressY: JSON.stringify(props.와이전달),
          },
        })
        .then((result) => {
          console.log("전송성공");
          console.log("프롭스는??:", props.주소전달);
          console.log(result);
          console.log("프롭스는??:", props.주소전달);
          // let mapDiv = document.getElementById("map");
          // html2pdf(mapDiv);
        })
        .catch((err) => {
          console.log("에러발생");
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(props.주소전달);
    console.log(props.엑스전달);
    console.log(props.와이전달);
  }, [props.와이전달, props.엑스전달]);

  return (
    <div>
      <div>
        <Map
          center={{
            lat: Number(props.엑스전달),
            lng: Number(props.와이전달),
          }}
          style={{
            padding: "0",
            margin: "0 auto",
            width: "50%",
            height: "360px",
          }}
        >
          <MapMarker
            position={{
              lat: Number(props.엑스전달),
              lng: Number(props.와이전달),
            }}
          >
            <div style={{ color: "#000" }}>{props.주소전달}</div>
          </MapMarker>
        </Map>
      </div>
      <button onClick={MapClick}>주소저장</button>
      {/* <button onClick={onButtonClick}>지도가 저장됩니다!</button> */}
    </div>
  );
}

// function Test() {
//   const ref = useRef < HTMLDivElement > null;

//   const onButtonClick = useCallback(() => {
//     if (ref.current === null) {
//       return;
//     }

//     toPng(ref.current, { cacheBust: true })
//       .then((dataUrl) => {
//         const link = document.createElement("a");
//         link.download = "my-image-name.png";
//         link.href = dataUrl;
//         link.click();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [ref]);
// }

export default KakaoMap;
