"use client";

import classes from "./button.module.scss";
import { Subteam } from "@/types/model";

// todo: add alt text

export default function Button({
  content,
  isActive,
  onClick,
}: {
  content: string;
  isActive: boolean;
  onClick: any; // update later
}) {
  return (
    <button
      className={
        isActive ? `${classes.button} ${classes.active}` : `${classes.button}`
      }
      onClick={onClick}
    >
      {content}
    </button>
  );
}
