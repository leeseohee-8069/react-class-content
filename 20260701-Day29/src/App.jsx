// App.jsx

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SelectBasic from "./ex/SelectBasic";
import SelectObjectTest from "./ex/SelectObjectTest";
import SelectArray from "./ex/SelectArray";
import SelectTotalTest from "./ex/SelectTotalTest";
import InputSearch from "./ex/InputSearch";
import InputTest from "./ex/InputTest";

export default function App() {
  return (
    <div>
      {/* 버튼을 클릭하면 페이지 이동 */}
      <Link to="/select">select 테스트</Link>
      <Link to="/array">array 테스트</Link>
      <Link to="/total">total 테스트</Link>
      <Link to="/input">input 테스트</Link>
      <Link to="/test">input 테스트2</Link>
      <br />
      <br />
      <hr />

      {/* 한곳에서 URL경로를 관리한다. */}

      <Routes>
        {/* 메인 페이지 localhost:5173/ -> SelectBasic보여줘 */}
        <Route path="/" element={<SelectBasic />}></Route>

        {/* 새로운 페이지 추가 됨! */}
        <Route path="/select" element={<SelectObjectTest />}></Route>

        <Route path="/array" element={<SelectArray />}></Route>

        <Route path="/total" element={<SelectTotalTest />}></Route>

        <Route path="/input" element={<InputSearch />}></Route>

        <Route path="/test" element={<InputTest />}></Route>
      </Routes>
    </div>
  );
}
