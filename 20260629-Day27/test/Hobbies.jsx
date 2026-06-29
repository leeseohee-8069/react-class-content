// Hobbies.jsx
// Hobbies리액트 파일 만들어줘 기본 세팅만해
import React, { useState } from "react";

export default function Hobbies() {
  //1. 각각 저장 하기
  // 저장하는 변수들의 순서는 상관없다!
  let [soccer, setSoccer] = useState(false);
  let [baseball, setBaseball] = useState(false);
  let [basketball, setBasketball] = useState(false);
  let [jokgu, setJokgu] = useState(false);

  // 취미들을 한번에 저장하고 싶을 경우!
  let [hobbies, setHobbies] = useState([]);
  return (
    <div>
      <h2>취미 선택</h2>
      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setSoccer(이벤트정보.target.checked);
          }}
        />
        축구
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setBaseball(이벤트정보.target.checked);
          }}
        />
        야구
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setJokgu(이벤트정보.target.checked);
          }}
        />
        족구
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(이벤트정보) => {
            setBasketball(이벤트정보.target.checked);
          }}
        />
        농구
      </label>

      <h3>선택한 취미</h3>
      <p>ture이면 태그를 보여줘! 기호!</p>
      {soccer && <p>축구</p>}
      {baseball && <p>야구</p>}
      {basketball && <p>농구</p>}
      {jokgu && <p>족구</p>}
    </div>
  );
}

/*
<p>축구 : {String(soccer)}</p>
      <p>야구 : {String(baseball)}</p>
      <p>농구 : {String(basketball)}</p>
      <p>족구 : {String(jokgu)}</p>

버튼을 눌렀을 때 결과가 true , false나오지 않는다
그래서 우리가 다크모드! false 우리가 결과를 
직접 뒤집어서 false->true   ! not기호

checkbox 눌렀을 때 결과가 true, false 자동으로
나온다. 

checkbox 여러개의 값을 체크할 수있다.

참이면 태그가 보이고! 거짓이면 무시한다.
true && 태그  ==  if(true) {}  

조건 ? true 이면 실행<p> : false 이면 실행<h2>
if(true){}  else{}
*/
