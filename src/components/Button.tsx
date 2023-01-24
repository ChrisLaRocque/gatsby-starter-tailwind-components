import React from "react";
import { Link } from "gatsby";
export default function Button({
  to = "/",
  text = "Button",
  colors = {
    bgTwColor: "blue-500",
    hoverBgTwColor: "blue-700",
    textTwColor: "white",
  },
}) {
  return (
    <Link
      to={to}
      className={`rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700`}
    >
      {text}
    </Link>
  );
}
