// SnsPage.jsx
// 자동으로 함수 틀을 만들어주는 단축키 rfc
import React from "react";
import Feed from "./component/Feed";

//SnsPage를 만들어서 중복되는 태그들을 Feed새로운 태그를 만들어서
// 중복 제거 했는데 문제가 발생 Feed의 내용들이 다 똑같아
export default function SnsPage() {
  return (
    <div>
      {/* Feed라는 게시글 틀을 만들 건데 사진과 내용을 밖에서
      받아온다.  */}
      <Feed
        content="오늘 술한잔해야지..."
        path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX745YMnwFeZf9-R25-LcrJ30CwK-JVKcR0Q&s"
      />
      <Feed
        content="줄넘기 너무 재밌다"
        path="https://i.namu.wiki/i/0Unyq5Ln96ibUBVDyRj48q4WbiJ7z7ozRnd7pLNJ-YT2ISABQ00OOGZd8jgf_Qvw6MAFavFyVTh5n9peZuik9w.webp"
      />
      <Feed
        content="저녁 뭐먹지?"
        path="https://i.namu.wiki/i/h5gTVbR7kDn-bBshoThHnt42y68U48Jiln6DIpK-TwDXLrk6G_bu7l6egvkD_iNYPBkGbY028XxO2CYjHJ0oMA.webp"
      />
    </div>
  );
}
