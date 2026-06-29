import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import UseStateRouter from "./UseStateRouter";
// import Signup from "./signup";
// import Hobbies from "./Hobbies";
// import App from './App.jsx'
// import RadioButtonTest from "./RadioButtonTest";
import "./index.css";
import Kiosk from "./Kiosk";
// import UseStateRouter2 from "./UseStateRouter2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Kiosk />
  </StrictMode>,
);
