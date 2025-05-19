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
      <div className="bg-[#171B1A] absolute md:w-[75%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0px_1px_0_rgba(255,255,255,0.7)]">
        <HeroSection />

        <Row>
          <Col xs={24} md={24} lg={9}></Col>

          <Col
            xs={24}
            md={24}
            lg={15}
            className="space-y-[120px] md:pr-20 px-4"
          >
            <Portfolio />
            <Resume />
            <Skills />
            <Pricing />
            <Blog />
            <Contact />
          </Col>
        </Row>
      </div>

      {/* Home Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover  min-h-[447px]">
        home
      </section>

      {/* Resume Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover  min-h-[447px]">
        resume
      </section>

      {/* Skills Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover min-h-[447px]">
        skill
      </section>

      {/* Pricing Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover min-h-[447px]">
        pricing
      </section>

      {/* Portfolio Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover min-h-[447px]">
        portfolio
      </section>

      {/* Blog Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover min-h-[447px]">
        blog
      </section>

      {/* Contact Section */}
      <section className="bg-[url('/assets/images/background-img.png')] bg-no-repeat bg-center bg-cover min-h-[447px]">
        contact
      </section>
    </div>
  );
}
