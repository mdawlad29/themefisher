import { Col, Row } from "antd";
import React, { useRef } from "react";
import { Heading } from "../shared/Heading";
import { PricingCard } from "../shared/PricingCard";
import { useInView, motion } from "framer-motion";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <Heading title="Pricing" />

      <Row gutter={[20, 20]}>
        {[...Array(4)]?.map((_: any, index: number) => (
          <Col key={index} xs={24} md={12}>
            <motion.div
              initial={{
                x: index % 2 === 0 ? "-2vw" : "2vw",
                opacity: 0,
              }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: index % 2 === 0 ? "-2vw" : "2vw", opacity: 0 }
              }
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <PricingCard
                title={
                  index === 0
                    ? "intro"
                    : index === 1
                    ? "base"
                    : index === 2
                    ? "popular"
                    : "enterprise"
                }
                amount={
                  index === 0 ? 29 : index === 1 ? 49 : index === 2 ? 99 : 199
                }
              />
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Pricing;
