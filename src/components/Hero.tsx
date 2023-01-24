import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./Button";
export default function Hero({ image }) {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="Abstract moon and clouds"
        className="absolute -z-10 h-full w-full"
      />
      <div id="hero-text" className="my-36 min-w-[50%] text-white">
        <h1 className="text-xl font-bold">Hero</h1>
        <p className="mb-4">I&apos;m a paragraph under this lil h1 guy</p>
        <Button />
      </div>
    </section>
  );
}
export const query = graphql`
  fragment HeroImage on ImageSharp {
    gatsbyImageData(width: 1200)
  }
`;
