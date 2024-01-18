"use client";

import classes from "./button.module.scss";

export default function Button({
  content,
  isActive,
  onClick,
}: {
  content: string;
  isActive: boolean;
  onClick: () => void;
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
