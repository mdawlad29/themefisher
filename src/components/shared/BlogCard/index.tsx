import { Flex } from "antd";
import Image from "next/image";

export const BlogCard = ({
  image,
  title,
  className,
}: {
  image?: string;
  title?: string;
  className?: string;
}) => {
  return (
    <div className={`${className} bg-black`}>
      <Image
        src={`${image}`}
        width={320}
        height={320}
        alt="blog-image"
        className="object-contain w-full h-full"
      />

      {/* Content */}
      <div className="p-6">
        <div className="text-[#747474] text-[12px] mb-[10px]">
          {title} | 28 Apr 2023
        </div>

        <h3 className="text-white text-[18px] font-bold mb-4">
          The artist vocation is to send light into the human heart.
        </h3>

        <p className="text-[#979797] mb-6">
          Lorem ipsum is simply dummy text the printing typesetting industry.
          Lorem ipsum has been...
        </p>

        <Flex align="center" gap={4} className="mb-2">
          <div className="h-px bg-[#F89222] w-[20px]"></div>
          <span className="text-white">Posted by Daryl Smith</span>
          <div className="h-px bg-[#F89222] w-[20px]"></div>
        </Flex>
      </div>
    </div>
  );
};
