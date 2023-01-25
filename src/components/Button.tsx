import React from "react";
import { Link } from "gatsby";

type ButtonProps = {
  to: string;
  text: string;
};

export default function Button({ to = "/", text = "Button" }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`rounded bg-purple-700 py-2 px-4 font-bold text-white hover:bg-purple-900`}
    >
      {text}
    </Link>
  );
}
