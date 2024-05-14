import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <>
      <div
        className={`nav-item ${active === "home" ? "active" : ""}`}
        onClick={() => {
          setActive("home");
        }}
      >
        Trang chủ
      </div>
      <div
        className={`nav-item ${active === "product" ? "active" : ""}`}
        onClick={() => {
          setActive("product");
        }}
      >
        Sản phẩm
      </div>
      <div
        className={`nav-item ${active === "des" ? "active" : ""}`}
        onClick={() => {
          setActive("des");
        }}
      >
        Giới thiệu
      </div>
      <div
        className={`nav-item ${active === "contact" ? "active" : ""}`}
        onClick={() => {
          setActive("contact");
        }}
      >
        Liên hệ
      </div>
    </>
  );
}
