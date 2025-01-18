"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Icons } from "./icons";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-2 right-2 hover:cursor-pointer"
    >
      {theme === "dark" ? (
        <Icons.sun className="h-10 w-10 " />
      ) : (
        <Icons.moon className="h-10 w-10 " />
      )}
      <span className="sr-only">Toggle Theme</span>
    </div>
  );
}
