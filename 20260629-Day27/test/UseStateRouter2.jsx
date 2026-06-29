// UseStateRouter2.jsx
import React, { useState } from "react";
import BestPage from "../src/pages/BestPage";
import NewPage from "../src/pages/NewPage";
import SalePage from "../src/pages/SalePage";
import CartPage from "../src/pages/CartPage";
import Signup from "../src/signup";

export default function UseStateRouter2() {
  //현재 메뉴를 저장하는 변수!
  let [menu, setMenu] = useState("best");
  return (
    <div>
      <h2>쇼핑몰 메뉴</h2>
      <p>메뉴를 클릭하면 화면이 변경됩니다.</p>
      <button
        onClick={() => {
          setMenu("signup");
        }}
      >
        회원가입
      </button>
      <button
        onClick={() => {
          setMenu("best");
        }}
      >
        best
      </button>
      <button
        onClick={() => {
          setMenu("new");
        }}
      >
        신상품
      </button>
      <button
        onClick={() => {
          setMenu("sale");
        }}
      >
        할인상품
      </button>
      <button
        onClick={() => {
          setMenu("cart");
        }}
      >
        장바구니
      </button>
      <br />
      <br />
      <hr />
      {menu == "signup" && <Signup />}
      {menu == "best" && <BestPage />}
      {menu == "new" && <NewPage />}
      {menu == "sale" && <SalePage />}
      {menu == "cart" && <CartPage />}
    </div>
  );
}
// 실무에서는 useState를 이용해서 하지는 않는다.
// 라이브러리르를 사용한다 react-router-dom

// (태그들 리액트가 규칙만들었다 한번에 감싸서 보내라!)
// UseStateRouter2 하나의 페이지에 모든 코드가
// 올라오면 문제가 된다. 만약 상품이 1000개라면
// 똑같은 중복 태그들이 많이 보이고 코드가 길어져서
// 보기가 힘들다!
// 코드를 수정할때 다른 부분을 건드릴 위험
// 다른페이지에서 혹시라도 중복내용 ! 또 코드를 작성!
// 그래서 분리시킨다.
// 리액트파일이 확장자 .jsx파일로 되어있어서 페이지랑
// 컴포넌트 구분이 어렵다. 그래서 폴더로 나눈다.

/*
{menu == "best" && (
        <div>
          <h3>베스트 상품 페이지</h3>
          <p>가장 많이 판매된 상품입니다.</p>
        </div>
      )}

      {menu == "new" && (
        <div>
          <h3>신상품 페이지</h3>
          <p>이번주 새로 등록된 상품입니다.</p>
        </div>
      )}

      {menu == "sale" && (
        <div>
          <h3>할인상품</h3>
          <p>현재 할인 중인 상품입니다.</p>
        </div>
      )}

      {menu == "cart" && (
        <div>
          <h3>장바구니</h3>
          <p>담아둔 상품을 확인하세요.</p>
        </div>
      )}

*/
