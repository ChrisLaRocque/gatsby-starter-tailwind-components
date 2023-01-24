import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function Split({ image, h3 = "Split header" }) {
  return (
    <section className="group py-6 lg:py-12">
      <div className="mx-auto block max-w-2xl group-odd:flex-row-reverse group-even:flex-row lg:flex">
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
        <div className="text-wrapper p-2">
          <h3 className="font-bold">{h3}</h3>
          <p className="max-w-[88ch]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            itaque optio laborum earum unde provident, quod laudantium
            veritatis, possimus ratione repudiandae quae aut sint eius sequi
            minus sit commodi consectetur!
          </p>
        </div>
      </div>
    </section>
  );
}
export const query = graphql`
  fragment SplitImage on ImageSharp {
    gatsbyImageData(width: 800)
  }
`;
