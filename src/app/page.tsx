"use client";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import HeroSection from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white relative">
      <div className="bg-[#171B1A] md:absolute md:w-[75%] w-[90%] md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0px_1px_0_rgba(255,255,255,0.7)] shadow-[0px_0px_10px_0px_#ffffff38] z-[99999] mx-auto">
        <HeroSection />

        <Row>
          <Col xs={24} md={24} lg={9}></Col>

          <Col
            xs={24}
            md={24}
            lg={15}
            className="md:space-y-[120px] space-y-[60px] md:pr-20 px-4"
          >
            <Resume />
            <Skills />
            <Portfolio />
            <Blog />
            <Pricing />
            <Contact />
          </Col>
        </Row>

        <h1 className="absolute lg:-top-[85px] top-[45px] lg:-left-[100px] left-[45px] !text-white lg:!text-[90px] !text-[50px] font-bold opacity-5 md:block hidden -z-[1]">
          Home
        </h1>
      </div>

      {[...Array(6)]?.map((_: any, index: number) => (
        <section
          key={index}
          className="md:block hidden bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover lg:min-h-[1500px] min-h-[1570px]"
        ></section>
      ))}
    </div>
  );
}
