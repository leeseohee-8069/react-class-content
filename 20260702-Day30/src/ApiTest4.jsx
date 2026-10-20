// ApiTest4.jsx

import React, { useRef, useState } from "react";

export default function ApiTest4() {
  //회원정보를 저장
  // 프론트엔드인 리액트에 변수로 저장을 하면 브라우저 닫혔다가 열리면
  // 회원정보가 삭제됬다가 다시 생성
  // let 회원정보 = {
  //   name: "에리나",
  //   id: "qwer",
  //   pw: "qwer11!",
  // };

  // useState, 자바스크립트 객체로 저장을 하면 새로고침시 안에 데이터들이
  /// 몽땅 없어진다.
  let [user, setUser] = useState({});
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");

  
  //브라우저 안에 작은 저장공간
  localStorage.setItem("id", "qwer");
  localStorage.setItem("pw", "qwer11!");
  localStorage.setItem("주민번호", "11111");
  localStorage.setItem("admin", "true");
  localStorage.setItem("pay", "true");

  // 브라우저에만 저장하면 누구나 개발자도구를 알면 안에 저장된
  // 내용들을 조작할 수있다.
  // 안전하지 못하다!
  // 안전하게 조작 못하게 믿을 수있는 처리를 해줄 벡엔드!
  // 안보이는 곳을 처리하는 언어 (Java)
  // 국내 기업(특히 SI,금융권) 압도적으로 많이 씀!
  // springboot 프레임워크 생태계 완전 탄탄함
  // 1. 자바 언어를 작성할 수있는 도구!

  console.log(user);

  return (
    <div>
      <h2>실습 페이지</h2>
      <input
        type="text"
        placeholder="아이디"
        onChange={(이벤트정보) => setId(이벤트정보.target.value)}
      />
      <input type="text" placeholder="비밀번호" />

      <button
        onClick={() => {
          setUser({
            userId: id,
            userPw: "1111",
          });
        }}
      >
        회원가입{" "}
      </button>

      
    </div>
  );
}
