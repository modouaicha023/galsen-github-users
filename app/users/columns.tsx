"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "avatarUrl",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.avatarUrl}
          quality={100}
          width={56}
          height={56}
          alt=""
          className="rounded-md"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prénom(s) et Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="rounded-md max-w-4 break-words text-wrap">
          {row.original.name ? row.original.name : row.original.login}
        </span>
      );
    },
  },
  {
    accessorKey: "login",
    header: "Username",
    cell: ({ row }) => {
      return (
        <a
          href={`https://github.com/${row.original.login}`}
          className="rounded-md max-w-4 text-wrap hover:underline"
          target="_blank"
        >
          @{row.original.login.toLowerCase()}
        </a>
      );
    },
  },
  {
    accessorKey:
      "contributionsCollection.contributionCalendar.totalContributions",
    header: "Contributions Totales",
    cell: ({ row }) => {
      return (
        <span className="flex gap-x-2 items-center justify-center">
          <Icons.chart className="h-4 w-4" />{" "}
          {
            row.original.contributionsCollection.contributionCalendar
              .totalContributions
          }
        </span>
      );
    },
  },
  {
    accessorKey: "contributionsCollection.totalCommitContributions",
    header: "Totals de commits",
    cell: ({ row }) => {
      return (
        <span className="flex gap-x-2 items-center justify-center">
          <Icons.commit className="h-4 w-4" />{" "}
          {row.original.contributionsCollection.totalCommitContributions}
        </span>
      );
    },
  },
  {
    accessorKey: "contributionsCollection.restrictedContributionsCount",
    header: "Contributions privées",
    cell: ({ row }) => {
      return (
        <span className="flex gap-x-2 items-center justify-center">
          <Icons.incognito className="h-4 w-4" />{" "}
          {row.original.contributionsCollection.restrictedContributionsCount}
        </span>
      );
    },
  },
];
