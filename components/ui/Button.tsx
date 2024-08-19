"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick: () => void;
  actionButton?: boolean;
}
export default function Button({
  type,
  text,
  onClick,
  actionButton,
}: buttonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton && "bg-green-500 rounded-md p-2 text-white",
          "bg-blue-700 text-white p-2"
        )}
      >
        {text}
      </button>
    </>
  );
}
