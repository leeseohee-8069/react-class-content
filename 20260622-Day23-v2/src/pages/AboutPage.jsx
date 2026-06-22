// AboutPage.jsx

import React from "react";
import StackCard from "../component/StackCard";

export default function AboutPage() {
  // css 파일에서 클래스명은  리액트에서 className으로 사용
  // 된다.
  return (
    <div className="about-me-box">
      <h2>About Me</h2>
      <p className="title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere vitae
        soluta numquam quod vel facilis tempore molestias deserunt natus maxime?
        Placeat aliquid officia sed ut culpa fugiat, iure amet distinctio.
      </p>

      <div className="my-stacks">
        <StackCard />
        <StackCard />
        <StackCard />
      </div>
    </div>
  );
}
