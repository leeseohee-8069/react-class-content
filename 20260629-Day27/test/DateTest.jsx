import React, { useState } from "react";

export default function DateTest() {
  const today = new Date().toISOString().split("T")[0];
  let [date, setDate] = useState(today);

  return (
    <div>
      <h2>Date Test</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <h3>선택한 날짜: {date}</h3>
    </div>
  );
}

// src 폴더 안에 새로운 리액트 파일 만들어줘
// 파일이름은 signup.jsx
// 기본 세팅만 해줘 h2 회원가입이라고!
// main.jsx에 import signup.jsx 해줘

// 내 컴퓨터 바탕화면에 파일생성해줘
// 파일명은 test.txt야
// 안에 내용은 테스트입니다.라고 해줘
