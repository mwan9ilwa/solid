"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";


const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}

      <section className="mb-20">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `CUSTOMERS`,
              subtitle: `Our Partners and Clients`,
              description: `   `,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      </section>

      <section className="bg-alabaster dark:bg-blacksection border border-x-0 border-y-stroke dark:border-y-strokedark py-11">


        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          <div className="grid grid-cols-3 md:grid-cols-6 gap-7.5 lg:gap-12.5 xl:gap-29 justify-center items-center">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
