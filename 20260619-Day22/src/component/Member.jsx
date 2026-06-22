// Member.jsx

import ProfileImage from "./profile/ProfileImage";

// 중복되는 태그들을 새로운 태그로 만든다.
function Member() {
  return (
    <div className="profile">
      <ProfileImage />
      {/* <img src="https://i.namu.wiki/i/0Unyq5Ln96ibUBVDyRj48q4WbiJ7z7ozRnd7pLNJ-YT2ISABQ00OOGZd8jgf_Qvw6MAFavFyVTh5n9peZuik9w.webp" alt="" /> */}
      <h2>Apeach Kim</h2>
      <p>front-end</p>
    </div>
  );
}
// 내가만든 Member태그를 어디서든지 사용할 수있도록 내보내기
// 하겠다.
export default Member;
