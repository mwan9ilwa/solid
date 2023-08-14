import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top border border-white rounded-3xl p-7.5 xl:p-12.5 transition-all dark:hover:bg-hoverdark hover:bg-[#d0e1f2] dark:border-strokedark dark:bg-blacksection z-40 bg-[#e9edf0]"
      >
        <div className="flex items-center justify-center rounded-xl bg-primary w-16 h-16 relative">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="font-medium text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
          {title}
        </h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
