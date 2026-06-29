// GameCharList.jsx
import React from "react";

export default function GameCharList() {
  let 객체타입 = {
    name: "에리나",
    age: 20,
  };
  return (
    <div>
      <h2>귀여운 캐릭터 저장하기</h2>
      <p>이름: {객체타입.name}</p>
    </div>
  );
}
