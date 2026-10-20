//App2.jsx

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ArrayFind from "./ArrayFind";

export default function App2() {
  return (
    <div>
      {/* 여러개의 상세페이지 관리하는 경로들 */}
      <Link to="/">첫번째 상품</Link>
      <br />
      <br />
      <br /> <hr />
      <Routes>
        <Route path="/" element={<ArrayFind />}></Route>
      </Routes>
    </div>
  );
}
/*
상세 페이지를 만드는 것은 하나의 물건을 자세히 보기 위해서
페이지를 만들어야된다. 만들때 url도 각각 만들어야되고
리액트 파일도 각각 만들어야된다. 

물건 100개 -> 그러면 url? 100개 리액트 100개
물건 1000개      url 1000 리액트 1000개 

불편한점 
 - 물건이 늘어나면 페이지도 늘어나고 url도 너무 많아진다.
 - 중복적인 태그들이 엄청 늘어난다.(컴포넌트 분지(조각))

아직까지 해결 안된 문제는 url,리액트 계속만들어야된다.

    {/* 여러개의 상세페이지 관리하는 경로들 
      <Link to="/">첫번째 상품</Link>
      <Link to="/second">두번째 상품</Link>
      <Link to="/third">세번째 상품</Link>
      <br />
      <br />
      <br /> <hr />
      <Routes>
        <Route path="/" element={<Details />}></Route>
        <Route path="/second" element={<DetailTest2 />}></Route>
        <Route path="/third" element={<DetailTest3 />}></Route>
      </Routes>
    </div>
  <Route path="/product/:id" element={<Details />}></Route>
        <Route path="/post/:num" element={<Details />}></Route>


동적 라우팅?
  - url 번호만 바꿔서 하나의 상세페이지를 재사용하는 방법!

 - 고정 되어 있지 않고 값이 바뀌는 것!(동적)
 - URL의 일부가 바뀌어도 하나의 페이지를 재사용하는 기술!
 - 상세 페이지 파일을 1개 만들고 번호만 바꿔서 여러 상품을
   보여주는 것!

 path="/detail/:id"
 :id 동적 라우팅! --> 바뀌는 번호!
 


실무에서 가장 많이 쓰는 패턴! 
 상품 상세페이지 /product/1
               /product/2
               /product/3

 게시판 상세페이지  /post/1
                  /post/2
                  /post/3   
 숫자를 이용해서 각각의 내용에 객체 형식으로 저장해서 숫자만
 보고 안에 내용을 가져온다. 
 실무에서는 자동으로 랜덤숫자를 가져오는 UUID라이브러리!
 [
  {id : 1,
   pageName: "첫번째페이지",
   title: "청귤",
   price : 12000
  },
  {id : 2,
   pageName: "두번째페이지",
   title: "체리",
   price : 12000},
  {id : 3},
  {id : 4},
  {id : 5},
  


 ]

*/
