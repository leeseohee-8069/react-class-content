//NaverBlogPage.jsx

import React from "react";
import BlogCard from "../component/BlogCard.jsx";
export default function NaverBlogPage() {
  return (
    <div className="blog-page">
      <h2>블로그</h2>

      <BlogCard
        image="/project1.webp"
        title="오늘의 React 수업"
        content="컴포넌트와 props를 배웠어요."
        name="서희쌤"
      />

      <BlogCard
        image="/project1.webp"
        title="카페 추천"
        content="분위기 좋은 카페를 다녀왔어요."
        name="철수"
      />

      <BlogCard
        image="/project1.webp"
        title="공부 기록"
        content="오늘은 React 화면 나누기를 연습했습니다."
        name="영희"
      />
      <div className="bottom-nav">
        <button>
          <div>🏠</div>
          <span>홈</span>
        </button>

        <button>
          <div>🔍</div>
          <span>검색</span>
        </button>

        <button>
          <div>➕</div>
          <span>작성</span>
        </button>

        <button>
          <div>❤️</div>
          <span>좋아요</span>
        </button>

        <button>
          <div>👤</div>
          <span>MY</span>
        </button>
      </div>
    </div>
  );
}
