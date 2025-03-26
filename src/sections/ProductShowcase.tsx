'use client'
import React, { useRef } from "react";
import productImage from "@/assets/product-image2.png";
import Image from "next/image";
import pyramidImage from '@/assets/pyramid 1.png'
import tubeImage from '@/assets/torus 1.png'
import { motion, useScroll, useTransform } from 'framer-motion'


const ProductShowcase = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress }=useScroll({
    target: sectionRef,
    offset:  ['start end', 'end start'], 
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-gradient-to-b bg-[#dee5fc] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your leadership</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turns your idea into a fully functional, responsive,
            SaaS website in just minutes with this templates.
          </p>
        </div>
        <div className="relative">
          <Image 
          src={productImage} 
          alt="productImage" 
          className="mt-10" />
          <motion.img
          src={pyramidImage.src} 
          alt="pyramidImage" 
          height={262}
          width={262}
          style={{
            translateY,
          }}
          className="hidden md:block absolute -right-36 -top-32" />
          <motion.img
          src={tubeImage.src}
          className="hidden md:block absolute bottom-24 -left-32"
          height={228}
          width={228}
          style={{
            translateY,
          }}
          alt="tubeImage"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
