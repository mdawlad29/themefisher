"use client";
import { Flex, Typography } from "antd";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const { Text } = Typography;

export const Heading = ({
  title,
  className = "",
}: {
  title?: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.h1
      ref={ref}
      initial={{ y: "3vw", opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: "3vw", opacity: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.3,
      }}
      className={`${className} !text-white md:!text-[48px] !text-[28px] !mb-10 !font-bold capitalize`}
    >
      {title}
    </motion.h1>
  );
};

export const IconHeading = ({
  icon,
  title,
  className,
}: {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Flex align="center" gap={16} className={`${className} !mb-8`}>
      <div className="bg-[#333333] rounded w-8 h-8 flex justify-center items-center">
        {icon}
      </div>

      <Text className="!text-[24px] font-bold capitalize !text-white">
        {title}
      </Text>
    </Flex>
  );
};
