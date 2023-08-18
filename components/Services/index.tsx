"use client";
import React from "react";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import SectionHeader from "../Common/SectionHeader";

const Service = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SERVICES",
              subtitle: "Core Services of Quest",
              description: `Our comprehensive suite of IT and Cloud solutions designed to drive your success in the digital age. Explore our diverse range of services that empower you to thrive`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* <!-- Features item Start --> */}

            {servicesData.map((service, key) => (
              <SingleService service={service} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Service;
