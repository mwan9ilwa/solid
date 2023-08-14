import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="text-black dark:text-white text-3xl xl:text-hero font-medium mb-7">
            {title}
          </h2>
          <p className="mb-5 text-grey dark:text-white text-2xl font-normal mb-5 pr-16">{desc1}</p>
        </div>
        <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
