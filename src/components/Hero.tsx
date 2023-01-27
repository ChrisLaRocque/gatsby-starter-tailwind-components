import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./Button";

type HeroProps = {
  h1: string;
  h2: string;
  image: Queries.HeroImageFragment;
  p: string;
};

export default function Hero({ h1, h2, p, image }: HeroProps) {
  console.log("image", image);
  return (
    <section className="relative overflow-hidden">
      <div className=" absolute -z-10 h-full w-full bg-black opacity-60 backdrop-blur-3xl"></div>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt="Abstract moon and clouds"
        className="absolute -z-20 h-full w-full"
      />
      <div
        id="hero-text"
        className="my-36 mx-auto min-w-[50%] max-w-xl p-2 text-white"
      >
        <h2 className="mb-2 text-xs uppercase">{h2}</h2>
        <h1 className="mb-2 text-xl font-bold">{h1}</h1>
        <p className="mb-4 max-w-[49ch]">{p}</p>
        <Button to="/" text="Button" />
      </div>
    </section>
  );
}
export const query = graphql`
  fragment HeroImage on ImageSharp {
    gatsbyImageData(width: 1200)
  }
`;
