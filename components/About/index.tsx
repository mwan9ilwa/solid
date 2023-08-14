"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/about/about-light-01.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  ABOUT US
                </span>{" "}
                Quest Technologies
              </h4>

              <h4 className="text-grey dark:text-white text-2xl font-normal mb-5 pr-16">
                <p>
                  We are driven by the relentless pursuit of turning your
                  aspirations into reality. Our journey began with a simple yet
                  powerful idea: to transform your dreams into tangible
                  achievements through innovation and collaboration.
                </p>
              </h4>
              <h4 className="text-grey dark:text-white text-2xl font-normal mb-5 pr-16">
                <p>
                  Our team of passionate experts is committed to understanding
                  your unique journey and partnering with you every step of the way.
                </p>
              </h4>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {/* <h4 className="text-black dark:text-white font-medium uppercase">
                Launch Your SaaS Fast
              </h4> */}

              <h4 className="text-grey dark:text-white text-2xl font-normal mb-5 pr-16">
                <p>
                  Whether you're an entrepreneur with a groundbreaking concept,
                  an organization seeking to revolutionize your industry, or an
                  individual with a personal ambition, Quest is here to be your
                  partner in the quest for progress.
                </p>
              </h4>
              <h4 className="text-grey dark:text-white text-2xl font-normal mb-5 pr-16">
                <p>
                  Join us as we embark on this exciting journey together. Your
                  quest ignites our passion, and together, we forge the path to
                  innovation.
                </p>
              </h4>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
