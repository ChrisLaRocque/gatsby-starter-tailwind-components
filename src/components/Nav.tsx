import React from "react";
import { Link } from "gatsby";
type NavItem = {
  to: string;
  text: string;
};
type NavProps = {
  title: string;
  items?: NavItem[];
};

export default function Nav(props: NavProps) {
  const { title, items } = props;
  return (
    <nav
      style={{ border: "1px solid red" }}
      className="items flex w-full items-center justify-between p-2 text-right lg:text-left"
    >
      <strong className="text-xl font-bold">{title}</strong>
      <div className="nav-links relative ">
        <input
          className="checkbox peer w-9 opacity-0 lg:hidden"
          type="checkbox"
          id="hamburger-toggle"
          aria-label="Toggle Navigation"
        />
        <label
          style={{ border: "1px solid red" }}
          className="absolute top-0  right-0 flex h-12 w-12 flex-col justify-around p-2 lg:hidden"
          htmlFor="hamburger-toggle"
        >
          <span className="block h-2 w-full bg-black"></span>
          <span className="block h-2 w-full bg-black"></span>
          <span className="block h-2 w-full bg-black"></span>
        </label>

        <ul className="absolute right-0 top-16 hidden w-full peer-checked:block lg:relative lg:inset-0 lg:flex">
          {items &&
            items.map((item) => (
              <li key={item.text} className="p-2 lg:px-2">
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
