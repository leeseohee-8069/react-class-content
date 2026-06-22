// FoodPage.jsx
// 페이지를 만들때도 리액트 파일이기때문에
// jsx 확장자를 사용한다.

import React from "react";
import "./App.css"; //
import NavBar from "./component/NavBar";

// 1. 먼저 div안쪽에 HTML 태그 작성하기
//   컴포넌트 쓰지말기!
// 2. 디자인은 css에 하기

export default function FoodPage() {
  // main에게 태그를 전달! 그래야 main index.html
  // 파일에 끼워준다. 조건!
  // 한 번에 묶어서!  쿠팡

  return (
    <>
      {/* 메뉴바 필요하다! */}
      <NavBar />
      <div>
        <img
          src="https://www.ediya.com/files/menu/IMG_1781506976892.png"
          alt=""
        />
        <p>치즈케이크</p>
      </div>
      <div>
        <img
          src="https://www.ediya.com/files/menu/IMG_1781506976892.png"
          alt=""
        />
        <p>치즈케이크</p>
      </div>
      <div>
        <img
          src="https://www.ediya.com/files/menu/IMG_1781506976892.png"
          alt=""
        />
        <p>치즈케이크</p>
      </div>
    </>
  );
}
