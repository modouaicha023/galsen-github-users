import React from "react";
import { ToggleTheme } from "./theme-toggle";

const Header = () => {
  return (
    <header className="border border-red w-full h-fit px-2 py-2 flex justify-between items-center content-center">
      <ToggleTheme />
    </header>
  );
};

export default Header;
