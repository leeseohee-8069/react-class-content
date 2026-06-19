// 리액트는 css파일을 link태그로 가져오지 않고
// import 가져온다.
// App라는 태그를 사용할때 App.css파일을 포함해서
// 디자인 적용해라!

import './App.css'
// 신입 개발자들 면접에서 리액트를 사용한 이유?

function App() {  
  return (
    <>
      <h1>Jsx 리액트 문법</h1>
      <h2>JSX?</h2>
      <p>자바스크립트 + HTML을 섞어서 쓰는 문법</p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX745YMnwFeZf9-R25-LcrJ30CwK-JVKcR0Q&s" alt="" />
      <img src="https://i.namu.wiki/i/0Unyq5Ln96ibUBVDyRj48q4WbiJ7z7ozRnd7pLNJ-YT2ISABQ00OOGZd8jgf_Qvw6MAFavFyVTh5n9peZuik9w.webp" alt="" />
      <img src="https://i.namu.wiki/i/h5gTVbR7kDn-bBshoThHnt42y68U48Jiln6DIpK-TwDXLrk6G_bu7l6egvkD_iNYPBkGbY028XxO2CYjHJ0oMA.webp" alt="" />

      <h2>리액트 실행하는 순서!</h2>
      <ol>
       <li>고객이 url을 입력한다. </li>
       <li>index.html 파일이 크롬(브라우저)읽는다</li>
       <li>script태그를 만난다. 그래서 리액트 파일로 넘어간다</li>
       <li>main이라는 리액트가 App이라는 리액트 파일 읽는다.</li>
       <li>안에서 태그를 만든고 하나로 묶어서 main으로 보낸다.</li>
       <li>main이 app한테 받아서 index.html로 내용을 갈아끼운다.</li>
      </ol>
    </>
  )
}

export default App
