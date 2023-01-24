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
    <nav className="flex items-center justify-between p-2 text-right lg:text-left">
      <strong className="text-xl font-bold">{title}</strong>
      <div className="nav-links">
        <input
          className="checkbox peer hidden w-9 opacity-0"
          type="checkbox"
          id="hamburger-toggle"
          aria-label="Toggle Navigation"
        />
        <label
          className="flex h-7 w-7 flex-col justify-around p-1 lg:hidden"
          htmlFor="hamburger-toggle"
        >
          <span className="block h-1 w-full bg-black"></span>
          <span className="block h-1 w-full bg-black"></span>
          <span className="block h-1 w-full bg-black"></span>
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
