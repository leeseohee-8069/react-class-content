// ThirdPage.jsx

import React from "react";

export default function ThirdPage() {
  return (
    <div className="first-box">
      <h2>3단계</h2>
      <p>결제하기</p>
      <button
        onClick={() => {
          alert("주문완료!");
        }}
      >
        결제하기
      </button>
    </div>
  );
}
