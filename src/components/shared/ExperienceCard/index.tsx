import { Divider, Typography } from "antd";
import React from "react";
const { Text } = Typography;

export const ExperienceCard = ({
  date,
  title,
  subtitle,
  description,
}: {
  date?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}) => {
  return (
    <div className="mb-8 relative pl-10">
      <Text className="!text-white font-bold mb-3 border border-[#646464] p-[6px] rounded-lg w-[95px] block">
        {date}
      </Text>

      <div className="border border-[#646464] bg-[#121414] p-5 rounded-lg shadow-md">
        <Text className="!text-[#F89222] !text-[18px] font-bold !mb-2 block capitalize">
          {title}
        </Text>

        <Text className="!text-[12px] !text-[#8F8F8F] !mb-2">{subtitle}</Text>

        <Divider className="bg-[#646464] !my-4" />

        <p className="text-white text-[16px]">{description}</p>
      </div>
    </div>
  );
};
