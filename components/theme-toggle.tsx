"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "./icons";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Icons.sun className="h-6 w-6 " />
      ) : (
        <Icons.moon className="h-6 w-6 " />
      )}
      <span className="sr-only">Toggle Theme</span>
    </div>
  );
}
