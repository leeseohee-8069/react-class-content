import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BalanceMain from "./pages/balanceGame/BalanceMain";
// import "./index.css";
// import ControlTest2 from "./ControlTest2";
// import AdminPage from "./pages/AdminPage";
// import ControlTest from "./ControlTest";
// import UseStateTest from "./UseStateTest";
// import UseStateTest2 from "./UseStateTest2";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BalanceMain />
  </StrictMode>,
);
