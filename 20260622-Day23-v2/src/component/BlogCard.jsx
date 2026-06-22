// NaverBlogPage.jsx

import React from "react";

export default function BlogCard({ title, content, image, name }) {
  return (
    <div className="blog-card">
      <img src={image} alt="블로그 이미지" />

      <div className="blog-info">
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{name}</span>
      </div>
    </div>
  );
}
