// CartPage.jsx
//  url = "/"
//  시작페이지는 장바구니 페이지로!
import React from "react";

export default function CartPage() {
  return (
    <div>
      <h2>장바구니 메인 페이지</h2>

      <h3>1. axios 이용해서 carts에서 데이터 받아서 콘솔에찍기 </h3>
      <h3>2. 그 중에 id가 1번인 사람의 products를 모두 콘솔에 찍기</h3>
      <h3>
        3. 그중에 title,price,thumbnail 뽑아서 화면에 보이기(잔디 이미지참조)
      </h3>

      <button onClick={() => {}}>정보가져오기</button>

      <h3>동적라우팅을 이용해서 id 1이면 상세페이지 만들기 </h3>
    </div>
  );
}
