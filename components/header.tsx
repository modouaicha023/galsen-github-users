import React from "react";
import { ToggleTheme } from "./theme-toggle";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-fit  flex justify-between items-center content-center relative">
      <Image
        src={"/logo.png"}
        width={32}
        height={32}
        alt="Senegal Flag"
        className="absolute top-2 left-2"
      />
      <ToggleTheme />
    </header>
  );
};

export default Header;
