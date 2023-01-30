import * as React from "react";
import { graphql, PageProps, HeadProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Split from "../components/Split";
import Tabs from "../components/Tabs";

export default function IndexPage(props: PageProps) {
  const { data } = props;
  const { heroImage, splitImages } = data;

  return (
    <Layout title="Tailwind">
      <Hero
        image={heroImage.childImageSharp}
        h1="Tailwind components"
        h2="CSS-first website starter"
        p="A set of reusable components made mostly with Tailwind CSS, a bit of HeadlessUI, and designed to be used within the Gatsby framework."
      />
      <Split image={splitImages.nodes[0].childImageSharp} />
      <Split image={splitImages.nodes[1].childImageSharp} />
      <Tabs />
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
export function Head(props: HeadProps) {
  const { location, data } = props;
  const { heroImage } = data;
  return (
    <SEO
      title="Tailwind Gatsby component starter"
      description="A Gatsby starter with Tailwind installed and a basic set of React components for building a website quickly."
      pathname={location.pathname}
      imageURL={heroImage.childImageSharp.gatsbyImageData.images.fallback.src}
    />
  );
}
