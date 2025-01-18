"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Icons } from "./icons";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-2 right-2 h-fit hover:cursor-pointer"
    >
      {theme === "dark" ? (
        <Icons.sun className="h-8 w-8 " />
      ) : (
        <Icons.moon className="h-8 w-8 " />
      )}
      <span className="sr-only">Toggle Theme</span>
    </div>
  );
}
