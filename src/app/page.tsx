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
    <div className="relative min-h-screen text-white lg:py-[200px]">
      {/* Background Image Layers */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, index) => (
          <section
            key={index}
            className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover lg:min-h-[1620px] min-h-[1570px] lg:block hidden"
          />
        ))}
      </div>

      {/* Main Content Wrapper */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-[#171B1A] md:w-[75%] w-[90%] shadow-[0_0px_1px_0_rgba(255,255,255,0.7)] shadow-[0px_0px_10px_0px_#ffffff38] mx-auto">
          <HeroSection />

          <Row>
            <Col xs={24} md={24} lg={9}></Col>

            <Col
              xs={24}
              md={24}
              lg={15}
              className="md:space-y-[120px] space-y-[60px] lg:pr-20 md:pr-8 px-4"
            >
              <Resume />
              <Skills />
              <Portfolio />
              <Blog />
              <Pricing />
              <Contact />
            </Col>
          </Row>

          <h1 className="absolute lg:-top-[85px] -top-[45px] lg:left-[90px] -left-[60px] text-white text-[50px] lg:text-[90px] font-bold opacity-5 -z-[1] lg:block hidden">
            Home
          </h1>
        </div>
      </div>
    </div>
  );
}
