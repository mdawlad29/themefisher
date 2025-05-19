import { Flex, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

export const BlogCard = ({
  image,
  title,
  subtitle,
  className,
  isPortfolio = false,
}: {
  image?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  isPortfolio?: boolean;
}) => {
  return (
    <>
      {!isPortfolio ? (
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
              Lorem ipsum is simply dummy text the printing typesetting
              industry. Lorem ipsum has been...
            </p>

            <Flex align="center" gap={4} className="mb-2">
              <div className="h-px bg-[#F89222] w-[20px]"></div>
              <span className="text-white">Posted by Daryl Smith</span>
              <div className="h-px bg-[#F89222] w-[20px]"></div>
            </Flex>
          </div>
        </div>
      ) : (
        <div className={`relative group ${className}`}>
          <Image
            src={`${image}`}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
            <div>
              <Link
                href={""}
                className="absolute top-8 right-8 bg-[#000] w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_0px_8px_0px_#f5d59740]"
              >
                <IoIosLink color="#fff" size={16} />
              </Link>

              <Typography.Text className="!text-white !text-[20px] font-bold block !mb-4 text-center">
                {title}
              </Typography.Text>
              <Typography.Text className="!text-[#AFAFAF] !text-[16px] block text-center">
                {subtitle}
              </Typography.Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
