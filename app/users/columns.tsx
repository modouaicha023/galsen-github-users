"use client";

import { User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "avatarUrl",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.avatarUrl}
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
    header: "Prénom(s) et Nom ",
    cell: ({ row }) => {
      return (
        <span className="rounded-md max-w-4 text-wrap">
          {row.original.name}
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
  },
  {
    accessorKey: "contributionsCollection.totalCommitContributions",
    header: "Totals de commits",
  },
  {
    accessorKey: "contributionsCollection.restrictedContributionsCount",
    header: "Commits privées",
  },
];
