// Lab1.jsx

import React, { useState } from "react";
import SettingItem from "../component/SettingItem";

// Lab1이 가지고 있는 값들을 SettingItem
// 이라는 리액트 파일로 보내준다.

//SettingItem 받는 입장
// Lab1 보내는 입장

export default function Lab1() {
  const [dark, setDark] = useState(false);
  const [alarm, setAlarm] = useState(true);
  const [wifi, setWifi] = useState(true);

  return (
    <div className={dark ? "page darkPage" : "page"}>
      <div className={dark ? "phone darkPhone" : "phone"}>
        <h2>📱 설정</h2>
        <p>오늘 배운 useState 복습</p>

        <SettingItem
          icon="🌙"
          title="다크모드"
          value={dark}
          setValue={setDark}
        />

        <SettingItem icon="🔔" title="알림" value={alarm} setValue={setAlarm} />

        <SettingItem
          icon="📶"
          title="와이파이"
          value={wifi}
          setValue={setWifi}
        />

        <div className="result">
          <h3>현재 상태</h3>
          <p>다크모드 : {dark ? "켜짐" : "꺼짐"}</p>
          <p>알림 : {alarm ? "켜짐" : "꺼짐"}</p>
          <p>와이파이 : {wifi ? "켜짐" : "꺼짐"}</p>
        </div>
      </div>
    </div>
  );
}

/*
<div className="item">
          <span>🌙 다크모드</span>
          <button onClick={() => setDark(!dark)}>{dark ? "ON" : "OFF"}</button>
        </div>

        <div className="item">
          <span>🔔 알림</span>
          <button onClick={() => setAlarm(!alarm)}>
            {alarm ? "ON" : "OFF"}
          </button>
        </div>

        <div className="item">
          <span>📶 와이파이</span>
          <button onClick={() => setWifi(!wifi)}>{wifi ? "ON" : "OFF"}</button>
        </div>

*/
