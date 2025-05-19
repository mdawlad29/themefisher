import { Col, Row } from "antd";
import React, { useRef } from "react";
import { BlogCard } from "../shared/BlogCard";
import { useInView, motion } from "framer-motion";
import { Heading } from "../shared/Heading";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <Heading title="blog" />

      <Row gutter={[24, 60]}>
        {[...Array(6)]?.map((_: any, index: number) => (
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
              <BlogCard
                className={`${
                  index === 3 ? "md:-mt-16" : index === 5 ? "md:-mt-36" : ""
                }`}
                title={
                  index === 0
                    ? "photography"
                    : index === 1
                    ? "adventure"
                    : index === 2
                    ? "graphic design"
                    : index === 3
                    ? "travel"
                    : index === 4
                    ? "design"
                    : "travel"
                }
                image={
                  index === 0
                    ? "/assets/images/blog/blog-1.png"
                    : index === 1
                    ? "/assets/images/blog/blog-2.png"
                    : index === 2
                    ? "/assets/images/blog/blog-3.png"
                    : index === 3
                    ? "/assets/images/blog/blog-4.png"
                    : index === 4
                    ? "/assets/images/blog/blog-5.png"
                    : "/assets/images/blog/blog-6.png"
                }
              />
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Blog;
