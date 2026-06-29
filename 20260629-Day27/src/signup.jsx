import React, { useState } from "react";
import "./signup.css";

export default function Signup() {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [signupPath, setSignupPath] = useState("");
  const [gender, setGender] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h2>회원가입</h2>
          <button className="close-btn" onClick={handleClose}>
            ✕
          </button>
        </div>
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">생년월일</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupPath">가입 경로</label>
            <select
              id="signupPath"
              value={signupPath}
              onChange={(e) => setSignupPath(e.target.value)}
            >
              <option value="">선택해주세요</option>
              <option value="friend">지인 추천</option>
              <option value="search">인터넷 검색</option>
              <option value="sns">SNS 광고</option>
              <option value="other">기타</option>
            </select>
          </div>
          <div className="form-group">
            <label>성별</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                남성
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                여성
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="none"
                  checked={gender === "none"}
                  onChange={(e) => setGender(e.target.value)}
                />
                선택안함
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/*
단계별로 하나씩 코딩을 하는것이 좋다!
1단계를 적용했을 때 문제가 발생!
       테스트를 동시에 진행!
2단계로 넘어가기
3단계로 넘어가기 


*/
