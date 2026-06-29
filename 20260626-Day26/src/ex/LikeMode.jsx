// LikeMode.jsx

import React, { useState } from "react";

// 유튜브나 SNS나 숏츠 , 인스타그램 좋아요
// 뉴스등등 내가 다음에 웹에 들어가서 봤을 때도
// 좋아요 유지!

// 버튼 -> 좋아요 상태 변경 -> 화면 변경 -> 내가 본다.
export default function LikeMode() {
  // 좋아요를 기억하는 변수!
  // 좋아요 누름 true
  // 좋아요 안 누름 false
  let [like, setLike] = useState(false);

  return (
    <div>
      <h2>좋아요 예제</h2>
      <p> ?(연산자 == 기호다!)는 if문을 짧게 쓰기 위한 도구!</p>
      <p>결과 ? true이면 실행 : false이면 실행 </p>
      <h3>{like ? "❤️" : "🤍"}</h3>

      <button
        onClick={() => {
          setLike(!like);
        }}
      >
        좋아요
      </button>
    </div>
  );
}
