import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Split from "../components/Split";

export default function IndexPage({ data }: Queries.HomepageQuery) {
  const { heroImage, splitImages } = data;

  return (
    <Layout title="Tailwind">
      <Hero
        image={heroImage.childImageSharp}
        h1="Tailwind components"
        h2="CSS only website starter"
        p="A set of reusable components made purely with Tailwind CSS, and designed to be used within the Gatsby framework."
      />
      <Split image={splitImages.nodes[0].childImageSharp} />
      <Split image={splitImages.nodes[1].childImageSharp} />
    </Layout>
  );
}
export const query = graphql`
  query Homepage {
    heroImage: file(name: { eq: "purple" }) {
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
