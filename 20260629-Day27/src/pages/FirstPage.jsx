//FirstPage.jsx
import React from "react";

export default function FirstPage({ 변수공유 }) {
  // 페이지가 안 바꾸는 이유는 키오스크 파일에서
  // useState 저장공간을 공유시켜야된다.
  // 키오스크야!  useState공간좀 줄래?
  // 분리시키면 변수공유가 안된다. 그래서 키오스크가 변수를
  //  공유해줘야된다.

  return (
    <div className="first-box">
      <h2>1단계</h2>
      <p>햄버거 고르기</p>
      <button
        onClick={() => {
          변수공유("second");
        }}
      >
        다음
      </button>
    </div>
  );
}
