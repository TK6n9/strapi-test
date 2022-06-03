import React, { useEffect, useState } from "react";
import axios from "axios";
import KakaoMap from "./KaKaoMap";

function HomePage() {
  var REST_API_KEY = "9e96199ed2fd3c760008ee0140526835";

  const [주소, 세팅주소] = useState("주식회사 아뮤즈");
  const [엑스, 세팅엑스] = useState(35.14771756896735);
  const [와이, 세팅와이] = useState(129.05869530644782);

  const onChange = (e) => {
    세팅주소(e.target.value);
  };

  function 전송() {
    try {
      axios({
        method: "get",
        url: `https://dapi.kakao.com//v2/local/search/address.json?query=${주소}`,
        headers: { Authorization: "KakaoAK " + REST_API_KEY },
      })
        .then(function (response) {
          세팅주소(response.data.documents[0].address.address_name);
          세팅엑스(parseFloat(response.data.documents[0].x));
          세팅와이(parseFloat(response.data.documents[0].y));
          // 세팅엑스(JSON.stringify(response.data.documents[0].x));
          // 세팅와이(JSON.stringify(response.data.documents[0].y));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("에러발생", err);
    }
  }

  return (
    <>
      {
        <input
          placeholder="주소를 입력해세요"
          onChange={onChange}
          value={주소}
        ></input>
      }
      {<button onClick={전송}>전송하기</button>}
      <br />
      <br />
      <KakaoMap 주소전달={주소} 엑스전달={엑스} 와이전달={와이}></KakaoMap>
    </>
  );
}

export default HomePage;
