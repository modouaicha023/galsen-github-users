import React from "react";
import { ToggleTheme } from "./theme-toggle";

const Header = () => {
  return (
    <header className="w-full h-fit  flex justify-between items-center content-center">
      <ToggleTheme />
    </header>
  );
};

export default Header;
