import React, { useState } from "react";
import "./header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <HeaderLeft toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <HeaderRight />
    </header>
  );
}

export default Header;
