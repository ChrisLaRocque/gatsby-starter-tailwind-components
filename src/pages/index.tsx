import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Split from "../components/Split";
export default function IndexPage({ data }: Queries.HomepageQuery) {
  const { heroImage, splitImages } = data;

  const navItems = [
    { to: "/", text: "Link 1" },
    { to: "/", text: "Link 2" },
  ];
  return (
    <>
      <Nav title="Tailwind" items={navItems} />
      <Hero
        image={heroImage.childImageSharp}
        h1="Tailwind components"
        h2="CSS only website starter"
        p="A set of reusable components made purely with Tailwind CSS, and designed to be used within the Gatsby framework."
      />
      <Split image={splitImages.nodes[0]} />
      <Split image={splitImages.nodes[1]} />
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
    splitImages: allFile(filter: { name: { in: ["road", "sand", "trees"] } }) {
      nodes {
        childImageSharp {
          ...SplitImage
        }
      }
    }
  }
`;
