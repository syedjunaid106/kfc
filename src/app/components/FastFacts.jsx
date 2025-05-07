import React from "react";
import Image from "next/image";

const factsData = [
  {
    image: "/images/pk.png",
    year: "1997",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, exercitationem.",
  },
  {
    image: "/images/hut.png",
    year: "128",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, exercitationem.",
  },
  {
    image: "/images/colab.png",
    year: "9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, exercitationem.",
  },
  {
    image: "/images/chick.png",
    year: "9000+",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, exercitationem.",
  },
];

const FastFacts = () => {
  return (
    <div className="h-full w-full bg-brand-darkGray lg:my-20 my-10">
      <div className="flex items-start justify-start w-[90vw] mx-auto py-10">
        <h2 className="lg:text-3xl text-xl text-brand-secondary font-bold">
          Fast Facts about YUM&apos;S Pakistan
        </h2>
      </div>

      {/* Facts Rendering */}
      <div className="flex lg:flex-row flex-col items-center justify-between mt-10 w-[90vw] mx-auto gap-4">
        {factsData.map((fact, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={fact.image}
              width={120}
              height={120}
              alt={`fact-${index}`}
              className="object-cover"
            />
            <h3 className="text-4xl text-center text-brand-secondary font-bold mt-5">
              {fact.year}
            </h3>
            <p className="text-xs text-brand-secondary px-6 text-center mt-2 leading-5 mb-10">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastFacts;
