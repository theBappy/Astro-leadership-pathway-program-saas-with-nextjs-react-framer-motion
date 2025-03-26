'use client'
import React, { useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/emojistar 1.png";
import springImage from "@/assets/helix 1.png";

import { motion, useScroll, useTransform } from 'framer-motion'

const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nemo, ea incidunt facilis saepe impedit asperiores magnam unde nulla
            accusantium dolor quasi in iusto exercitationem vitae rem facere est
            soluta!
          </p>
          <motion.img
            style={{
              translateY,
            }}
            src={starImage.src}
            alt="starImage"
            width={260}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            style={{
              translateY,
            }}
            src={springImage.src}
            alt="springImage"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5 gap-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
