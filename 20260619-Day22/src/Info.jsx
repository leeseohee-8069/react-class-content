// Into.jsx
// 매번 
//  우리가 만든 페이지를 다른 곳에서도 또 사용할 수있다.
import Member from "./component/Member";
import "./Info.css";

function Info(){
  //페이지 만들면 main에게 보내줘야된다. 
  // return 현재 페이지를 보낸다!
  //       여러개를 한꺼번에 묶어서 그룹을 지어서!
  return (
    <>
     <Member />
     <Member />
     <Member />
    </>
  )
}
// 메인한테 위에서 만든 return 값을 내보내기 하겠다.
// 위에서 만든 페이지 태그들을 내보내기 하겠다.
export default Info;

/*
<div className="profiles">
      <div className="profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX745YMnwFeZf9-R25-LcrJ30CwK-JVKcR0Q&s" alt="" />
        <h2>Eryna Lee</h2>
        <p>full-stack</p>
      </div>
      <div className="profile">
        <img src="https://i.namu.wiki/i/0Unyq5Ln96ibUBVDyRj48q4WbiJ7z7ozRnd7pLNJ-YT2ISABQ00OOGZd8jgf_Qvw6MAFavFyVTh5n9peZuik9w.webp" alt="" />
        <h2>Apeach Kim</h2>
        <p>front-end</p>
      </div>
      <div className="profile">
        <img src="https://i.namu.wiki/i/h5gTVbR7kDn-bBshoThHnt42y68U48Jiln6DIpK-TwDXLrk6G_bu7l6egvkD_iNYPBkGbY028XxO2CYjHJ0oMA.webp" alt="" />
        <h2>Muzi Pack</h2>
        <p>back-end</p>
      </div>

      <div className="profile">
        <img src="https://i.namu.wiki/i/48TtBn5VjNU7DZ5tv_6YYk7T6OGXXYOoiXL7ERQrVHJWpp8-N3mMcxVLJpuJKWLH8qKm08NZPdt-rKTJP8TipA.webp" alt="" />
        <h2>Tube lim</h2>
        <p>full-stack</p>
        <p className="new-tag">New</p>
      </div>

      * 나만의 태그를 만들기!

      </div>

*/