import React, { useEffect, useRef, useState } from "react";
import { Heading } from "../shared/Heading";
import { useInView, motion } from "framer-motion";
import { Flex, Typography } from "antd";

const skillsData = [
  { name: "UI/UX design", target: 95 },
  { name: "photography", target: 90 },
  { name: "creativity", target: 80 },
  { name: "team work", target: 95 },
  { name: "web design", target: 95 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const counts = skillsData.map(() => 0);
      const intervals: NodeJS.Timeout[] = [];

      skillsData.forEach(({ target }, i) => {
        intervals[i] = setInterval(() => {
          if (counts[i] >= target) {
            clearInterval(intervals[i]);
          } else {
            counts[i]++;
            setProgress((prev) => {
              const newProgress = [...prev];
              newProgress[i] = counts[i];
              return newProgress;
            });
          }
        }, 10);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isInView, skillsData]);

  return (
    <section>
      <Heading title="Skills" />

      <div ref={ref}>
        {skillsData.map(({ name }, index) => (
          <div key={index} className="mb-8">
            <Flex align="center" justify="space-between">
              <Typography.Text className="!text-[24px] font-medium !text-white capitalize block !mb-3">
                {name}
              </Typography.Text>

              <motion.div
                className="text-[24px] text-[#F89222]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {progress[index]}%
              </motion.div>
            </Flex>

            <div className="relative rounded-full w-full h-[10px] bg-[#442201] overflow-hidden">
              <motion.div
                className="h-full bg-[#F89222] rounded-full"
                style={{ width: `${progress[index]}%` }}
                initial={{ width: "0%" }}
                animate={
                  isInView ? { width: `${progress[index]}%` } : { width: "0%" }
                }
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
