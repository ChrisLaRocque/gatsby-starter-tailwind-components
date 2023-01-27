import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
type SplitProps = {
  h3?: string;
  image: Queries.SplitImageFragment;
};
export default function Split({ image, h3 = "Split header" }: SplitProps) {
  return (
    <section className="group py-6 lg:py-12">
      <div className="mx-auto block group-odd:flex-row-reverse group-even:flex-row lg:flex lg:max-w-[75vw]">
        <GatsbyImage image={image.gatsbyImageData} alt="" />
        <div className="text-wrapper p-4">
          <h3 className="font-bold">{h3}</h3>
          <p className="max-w-[91ch]">
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
    gatsbyImageData(width: 1200)
  }
`;
