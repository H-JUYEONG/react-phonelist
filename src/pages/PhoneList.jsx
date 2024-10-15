//import 라이브러리
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import 컴포넌트
import ItemPerson from "./ItemPerson";

//import css
import "../css/reset.css";
import "../css/list.css";

const PhoneList = () => {
  /*
	// 리다이렉트 안됨 (같은 페이지의 리다이렉트는 안된다)
	const navigate = useNavigate();
	*/

  /*--- 상태관리 변수들(값이 변하면 화면 렌더링) ------------*/
  const [personList, setPersonList] = useState([]);

  /*--- 일반변수 ------------------------------------------*/

  /*--- 일반 메소드 ----------------------------------------*/
  const getPersonList = () => {
    axios({
      method: "get", // put, post, delete
      url: `${process.env.REACT_APP_API_URL}/api/persons`,

      responseType: "json", //수신타입
    })
      .then((response) => {
        console.log(response); //수신데이터
        setPersonList(response.data.apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*--- 생명주기 + 이벤트 관련 메소드(handle메소드) ----------*/
  // 마운트 되었을때
  useEffect(() => {
    console.log("마운트 됐어요");

    // 서버에서 데이터 가져오기 그리기
    getPersonList();
  }, []);

  // 삭제 버튼 클릭했을때
  const handleDel = (no) => {
    console.log("삭제버튼 클릭");
    console.log(no);

    axios({
      method: "delete", // put, post, delete
      url: `${process.env.REACT_APP_API_URL}/api/persons/${no}`,

      responseType: "json", //수신타입
    })
      .then((response) => {
        console.log(response); //수신데이터
        console.log(response.data);

        if (response.data.result === "success") {
          /*
				// 리다이렉트 안됨 (같은 페이지의 리다이렉트는 안된다)
				Navigate("/list");
				*/
          // getPersonList();

          // 리스트(배열) personList에서 방금 삭제한 값만 제거된 새로운 배열
          // 리턴이 있을때만 {} 를 ()로 바꾸고 retrun을 생략할 수 있음
          let newArray = personList.filter((person) => person.personId !== no);

          setPersonList(newArray);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>전화번호부</h1>
      <br />

      <h2>전화번호-리스트</h2>
      <br />

      <p>등록된 전화번호리스트 입니다.</p>
      <br />

      {personList.map((personVo, index) => {
        return (
          <div key={index}>
            <ItemPerson
              key={personVo.personId}
              person={personVo}
              delPerson={handleDel}
            />
          </div>
        );
      })}

      <br />
      <Link to="/WriteForm" rel="noreferrer noopener">
        등록폼으로 이동
      </Link>
    </>
  );
};
export default PhoneList;
