import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import UseStateInput from "./UseStateInput";
// import "./index.css";
// import DarkMode from "./ex/DarkMode";
// import Lab1 from "./lab/Lab1";
// import BgChange from "./BgChange";
// import ClassNameTest from "./ClassNameTest";
// import LikeMode from "./LikeMode";
// import PasswordMode from "./ex/PasswordMode";
// import UseStateTest from "./UseStateTest";
// import App from './App.jsx'
// import TextCount from "./TextCount";
// import SearchArray from "./SearchArray";
// import CartList from "./CartList";
// import MovieList from "./MovieList";
// import FriendList from "./ex/FriendList";
// import UseObjectTest from "./UseObjectTest";
// import UseObjectList from "./UseObjectList";
import "./index2.css";
import GameCharList from "./GameCharList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameCharList />
  </StrictMode>,
);
