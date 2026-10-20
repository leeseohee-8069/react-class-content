// App.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./ex/Home";
import Jeju from "./ex/Jeju";
import Seoul from "./ex/Seoul";
import Busan from "./ex/Busan";
import Details from "./ex/Details";
import Destructuring from "./ex/Destructuring";
import ApiTest from "./ex/ApiTest";
import CartPage from "./CartPage";
import ApiTest2 from "./ApiTest2";
import ApiTest3 from "./ApiTest3";
import ApiTest4 from "./ApiTest4";

export default function App() {
  return (
    <div>
      <Routes>
        {/* 메인페이지 보여줘 */}
        <Route path="/" element={<ApiTest2 />}></Route>
        <Route path="/api3" element={<ApiTest3 />}></Route>
        <Route path="/api4" element={<ApiTest4 />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}
/**

   <Route path="/" element={<Home />}></Route>
   <Route path="/travel/jeju" element={<Jeju />}></Route>
   <Route path="/travel/seoul" element={<Seoul />}></Route>
   <Route path="/travel/busan" element={<Busan />}></Route>
  경로(url) 하나당 상세페이지가 하나씩 만들어진다. 
  100개 url 100개 상세페이지 (jsx파일) 100개 
  지옥으로 입성!

  해결책 - 동적 라우팅
  URL의 일부가 계속 바뀌는 라우팅!
  URL에 빈칸(:값)을 만들어놓고 들어오는 값을 가져와서 하나의 페이지를
  여러번 사용하는 기능 


 <div>
      {/* App 리액트 파일이 URL을 관리한다. 
     URL을 이용해서 화면을 보여줄 실질적인 관리자!

      App 안내데스크 
      url들어오면 Routes(경로들) 확인 
      element 설정은 어떤 페이지를 보여줄 지 결정
}

      <Routes>
        {/* 메인페이지 보여줘 }
        <Route path="/" element={<Home />}></Route>
        <Route path="/travel/:city" element={<Details />}></Route>
        <Route path="/dest" element={<Destructuring />}></Route>
        <Route path="/api" element={<ApiTest />}></Route>
      </Routes>

 */
