import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

export default function IndexPage({ data }: Queries.HomepageQuery) {
  const { heroImage } = data;
  const navItems = [
    { to: "/", text: "Link 1" },
    { to: "/", text: "Link 2" },
  ];
  return (
    <>
      <Nav title="Tailwind" items={navItems} />
      <Hero image={heroImage} />
    </>
  );
}
export const query = graphql`
  query Homepage {
    heroImage: file(name: { eq: "moon" }) {
      childImageSharp {
        ...HeroImage
      }
    }
  }
`;
