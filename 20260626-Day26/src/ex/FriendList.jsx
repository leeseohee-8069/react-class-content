// FriendList.jsx
import React, { useState } from "react";

export default function FriendList() {
  let [friends, setFriends] = useState([]);

  return (
    <div>
      <h2>친구 추가하기 </h2>
      <p>버튼을 클릭하면 각각 영희, 철수, 지민,영수,민수</p>
      <button
        onClick={() => {
          setFriends([...friends, "철수"]);
        }}
      >
        철수 추가
      </button>

      <button
        onClick={() => {
          setFriends([...friends, "영희"]);
        }}
      >
        영희 추가
      </button>

      <button
        onClick={() => {
          setFriends([...friends, "민수"]);
        }}
      >
        민수 추가
      </button>

      <button
        onClick={() => {
          setFriends([...friends, "지민"]);
        }}
      >
        지민 추가
      </button>

      <hr />
      <h3>친구목록: {friends}</h3>
    </div>
  );
}
