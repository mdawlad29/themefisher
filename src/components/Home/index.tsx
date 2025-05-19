import { Button, Col, Flex, Row, Typography } from "antd";
import React from "react";
import { FaHome } from "react-icons/fa";
const { Text } = Typography;

const HeroSection = () => {
  return (
    <section className="mb-[120px]">
      <Row>
        <Col xs={24} md={24} lg={9} className="">
          <div className="bg-[#121414] h-full pl-20 border-r border-[#353535]">
            <Text className="!text-[32px] font-bold !text-white capitalize block">
              daryl <span className="text-[#F89222]">smith</span>
            </Text>

            <span className="text-[18px] text-[#C2C2C2]">UI/UX designer</span>
          </div>
        </Col>
        <Col xs={24} md={24} lg={15} className="">
          <div className="bg-[#121414] py-6 pl-10 pr-20">
            <Flex align="center" justify="space-between">
              <Flex align="center" gap={16}>
                <div className="bg-[#F89222] rounded w-8 h-8 flex justify-center items-center">
                  <FaHome size={20} />
                </div>

                <Text className="!text-[24px] font-bold !text-white capitalize block">
                  home
                </Text>
              </Flex>

              <Button className="px-6 py-3 !bg-transparent border !border-[#F89222] text-[#F89222] font-bold !rounded-full !text-[#F89222] text-[16px]">
                Talk To Me
              </Button>
            </Flex>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
