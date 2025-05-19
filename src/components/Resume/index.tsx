import React, { useRef } from "react";
import { Heading, IconHeading } from "../shared/Heading";
import { ExperienceCard } from "../shared/ExperienceCard";
import { FaGraduationCap } from "react-icons/fa";
import Work from "../Work";
import { motion, useInView } from "framer-motion";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <Heading title="Resume" />

      <div className="mb-20">
        <IconHeading
          title={"education"}
          className="!mb-12"
          icon={<FaGraduationCap size={16} color="#F89222" />}
        />

        <div className="relative">
          <div className="absolute left-0 -top-5 bottom-0 w-2 border-[2px] border-[#646464] rounded-full z-0 md:block hidden" />

          {[...Array(2)]?.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  index === 0 ? "top-[16px]" : "bottom-[218px]"
                } w-4 h-4 rotate-45 border-[2px] border-[#646464] bg-[#171B1A] absolute -translate-x-1/2 -translate-y-1/2 left-[4px] z-10 md:block hidden`}
              />

              <motion.div
                ref={ref}
                initial={
                  index === 0
                    ? { x: "5vw", opacity: 0 }
                    : { x: "5vw", opacity: 0 }
                }
                animate={
                  isInView
                    ? { x: 0, opacity: 1 }
                    : index === 0
                    ? { x: "5vw", opacity: 0 }
                    : { x: "5vw", opacity: 0 }
                }
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <ExperienceCard
                  date={index === 0 ? "2016 - 2020" : "2014 - 2016"}
                  title="Harvard University"
                  subtitle={
                    index === 0
                      ? "B.A. and M.S., Computer Science"
                      : "Bachelor Degree"
                  }
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab aut commodi earum eligendi ipsum, laborum maiores
          mollitia, optio quam quis rerum totam voluptas."
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/*<--- Work Experience --->*/}
      <Work />
    </section>
  );
};

export default Resume;
