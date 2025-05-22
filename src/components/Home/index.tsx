import { Button, Col, Flex, Row, Typography } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaFacebookF, FaHome, FaLinkedinIn, FaPinterestP, FaTwitter, FaUser } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const { Text } = Typography;

const HeroSection = () => {
  const ref = useRef(null);

  return (
    <section>
      <Row
        className="bg-[#121414] py-[4.5px] lg:pl-16 md:pl-8 pl-4 lg:pr-20 lg:pr-10 pr-4"
        align={"middle"}
      >
        <Col xs={12} lg={9} className="pr-2">
          <div className="border-r border-[#353535]">
            <Text className="md:!text-[32px] !text-[20px] font-bold !text-white capitalize block">
              daryl <span className="text-[#F89222]">smith</span>
            </Text>

            <span className="md:text-[18px] text-[14px] text-[#C2C2C2]">UI/UX designer</span>
          </div>
        </Col>

        <Col xs={12} lg={15} className="md:pl-8 pl-4">
          <Flex align="center" justify="space-between" wrap gap={10}>
            <Flex align="center" gap={16}>
              <div className="bg-[#F89222] rounded md:w-8 w-7 md:h-8 h-7 flex justify-center items-center">
                <FaHome className="md:text-[20px] text-[18px]" />
              </div>

              <Text className="md:!text-[24px] !text-[20px] font-bold !text-white capitalize block">
                home
              </Text>
            </Flex>

            <Button className="px-6 py-3 !bg-transparent border !border-[#F89222] text-[#F89222] font-bold !rounded-full !text-[#F89222] text-[16px]">
              Talk To Me
            </Button>
          </Flex>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={24} lg={9} className="mx-auto">
          <div className="flex">
            <div className="shape-one bg-[#121414] h-[250px] w-[59px] relative mt-[250px]" />

            <Flex align="center" className="absolute bottom-[70px] left-[20px]">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="z-30 space-y-10"
              >
                <FaHome size={16} className="text-[#F89222]" />
                <FaUser
                  size={16}
                  className="hover:text-[#F89222] text-[#8F8F8F] duration-300 ease-in-out transaction-all"
                />
                <FaSquareXTwitter
                  size={16}
                  className="hover:text-[#F89222] text-[#8F8F8F] duration-300 ease-in-out transaction-all"
                />
                <BiSolidEdit
                  size={16}
                  className="hover:text-[#F89222] text-[#8F8F8F] duration-300 ease-in-out transaction-all"
                />
                <MdEmail
                  size={16}
                  className="hover:text-[#F89222] text-[#8F8F8F] duration-300 ease-in-out transaction-all"
                />
              </motion.div>
            </Flex>

            <div className="bg-black lg:w-[323px] w-full lg:ml-0 ml-3 h-[500px] relative">
              <Image
                src="/assets/images/user.png"
                alt="profile"
                width={480}
                height={480}
                className="object-contain h-full w-full mx-auto -mt-9"
              />

              <div className="flex justify-center items-center gap-4 py-[18px] shadow-[0px_-5px_20px_0px_#ffffff1a] absolute bottom-0 w-full bg-black">
                {[...Array(5)]?.map((_: any, index: number) => (
                  <Link
                    href={""}
                    key={index}
                    target="_blank"
                    className="w-[32px] h-[32px] rounded-full flex justify-center items-center !bg-[#121414] hover:scale-110 duration-300 ease-in-out transaction-all !text-white"
                  >
                    {index === 0 ? (
                      <FaFacebookF size={16} />
                    ) : index === 1 ? (
                      <FaLinkedinIn size={16} />
                    ) : index === 2 ? (
                      <FaPinterestP size={16} />
                    ) : index === 3 ? (
                      <IoLogoInstagram size={16} />
                    ) : (
                      <FaTwitter size={16} />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} md={24} lg={15}>
          <div ref={ref} className="flex">
            <div className="md:p-10 p-4">
              <motion.p
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="text-[#FBBF24] uppercase tracking-wide text-sm mb-3"
              >
                Introduction
              </motion.p>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="md:text-[38px] text-[24px] font-bold leading-tight mb-4"
              >
                I'm a Creative Developer & <br /> UI/UX Design Expert
              </motion.h1>

              <p className="text-[#AFAFAF] text-sm md:text-base mb-6 flex flex-wrap gap-2">
                <span>24 years</span>
                <span>/</span>
                <span>Robert Smith</span>
                <span>/</span>
                <span>UK London</span>
              </p>

              <div className="text-sm md:text-base leading-relaxed text-[#C6C6C6] mb-10">
                Prolific, full stack web developer with a passion for metrics and beating former
                “best-yets.” Prototyped 25 new product features per year for Flexor, Inc. Decreased
                rework by 22% and costs by 15%. Consistently receive high user experience scores for
                all web development projects, including a 55% increase for Flexor, Inc. Passionate
                about building world class web applications. One of my sites received a 2020 Webby
                for Best Navigation and Structure.
              </div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="flex flex-wrap items-center gap-4"
              >
                <button className="bg-[#F89222] hover:bg-[#f98005] transition-all text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2">
                  Download CV
                  <FiDownload size={16} />
                </button>
              </motion.div>
            </div>

            <div className="relative h-full lg:block hidden">
              <div className="shape-two bg-[#121414] h-[250px] w-[59px] flex items-center float-right mt-[250px] relative" />

              <div className="absolute top-[168px] -right-[115px] z-30">
                <p className="rotate-[-270deg] text-[12px] whitespace-nowrap text-[#A5A5A5] lg:block hidsden">
                  © design by themefisher developed by gethugothemes
                </p>
              </div>

              <div className="absolute bottom-0 -right-[2px] translate-x-[-50%] translate-y-[-50%]">
                {[...Array(2)]?.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="size-8 rounded-full bg-[#343434] hover:bg-[#F89222] flex justify-center items-center cursor-pointer text-white text-[12px] font-medium transition-transform duration-300 ease-in-out hover:scale-110 mb-[10px]"
                  >
                    {index === 0 ? "Fr" : "En"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
