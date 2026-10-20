import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import EmailPage from "./EmailPage";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";

export default function App() {
  return (
    <div>
      <h2>다른 페이지로 이동하는 버튼!</h2>
      <Link className="nav-menu" to="/email">
        이메일
      </Link>
      <Link className="nav-menu" to="/cart">
        장바구니
      </Link>
      <Link className="nav-menu" to="/product">
        상품
      </Link>

      <br />
      <br />
      <br />
      <hr />

      {/*  고객이 직접 url을 다 치고 들어와야된다. */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/email" element={<EmailPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}
