import React, { useState } from "react";
import { Heading } from "../shared/Heading";
import { Tabs } from "../shared/Tabs";
import { BlogCard } from "../shared/BlogCard";
import { Col, Row, Typography } from "antd";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section>
      <Heading title="Portfolio" />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <Row gutter={[24, 24]}>
        {(activeTab === "all"
          ? [...Array(8)]
          : activeTab === "mobile-app"
          ? [...Array(8)].slice(0, 2)
          : [...Array(8)].slice(0, 4)
        )?.map((_: any, index: number) => (
          <Col key={index} xs={24} md={12}>
            <BlogCard
              className={`${
                index === 3
                  ? "md:-mt-36"
                  : index === 5
                  ? "md:-mt-36"
                  : index === 7
                  ? "md:-mt-28"
                  : ""
              }`}
              isPortfolio
              subtitle={
                index === 0
                  ? "Figma mockup PSD editable"
                  : "Fitness Studio Website"
              }
              title={
                index === 0
                  ? "Figma Mockup"
                  : index === 8
                  ? "Website design"
                  : "Photography"
              }
              image={
                index === 0
                  ? "/assets/images/portfolio/portfolio-2.png"
                  : index === 1
                  ? "/assets/images/portfolio/portfolio-1.png"
                  : index === 2
                  ? "/assets/images/portfolio/portfolio-3.png"
                  : index === 3
                  ? "/assets/images/portfolio/portfolio-4.png"
                  : index === 4
                  ? "/assets/images/portfolio/portfolio-5.png"
                  : "/assets/images/portfolio/portfolio-6.png"
              }
            />
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]} className="mt-6">
        {[...Array(2)]?.map((_: any, index: number) => (
          <Col key={index} xs={24} md={12}>
            <div className="relative bg-black h-[204px] transition-opacity duration-500 flex items-center justify-center">
              <div>
                <Link
                  href={""}
                  className="absolute top-8 right-8 bg-[#000] w-8 h-8 flex items-center justify-center rounded-full shadow-[0px_0px_8px_0px_#f5d59740]"
                >
                  <IoIosLink color="#fff" size={16} />
                </Link>

                <Typography.Text className="!text-white !text-[20px] font-bold block !mb-4 text-center">
                  {index === 0 ? "Website design" : "Photography"}
                </Typography.Text>
                <Typography.Text className="!text-[#AFAFAF] !text-[16px] block text-center">
                  {index === 0
                    ? "Fitness Studio Website"
                    : "Photography Project"}
                </Typography.Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Portfolio;
