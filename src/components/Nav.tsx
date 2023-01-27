import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
// type NavItem = {
//   to: string;
//   text: string;
// };
type NavProps = {
  title: string;
};

export default function Nav({ title }: NavProps) {
  const items = useStaticQuery(graphql`
    query NavItems {
      allNavItemsJson {
        nodes {
          text
          to
        }
      }
    }
  `).allNavItemsJson.nodes;
  return (
    <nav className="flex items-center justify-between p-2 lg:text-left">
      <strong className="text-xl font-bold">{title}</strong>
      <div className="nav-links relative">
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

        <ul className="absolute top-[128%] right-[-26%] hidden bg-white peer-checked:block lg:relative lg:inset-0 lg:flex">
          {items &&
            items.map((item) => (
              <li
                key={item.text}
                className="relative block whitespace-nowrap p-4 lg:px-2"
              >
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
