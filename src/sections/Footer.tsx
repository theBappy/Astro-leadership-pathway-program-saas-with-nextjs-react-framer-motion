import React from "react";
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-center text-sm py-10">
      <div className="contain">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-2 before:blur  before:w-full before:bg-[linear-gradient(to_right, #fa7bff, #fb92cf, #ffdd9b, #c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} height={40} alt="logo" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#" className="hover:text-white transition-transform duration-200">About</a>
          <a href="#" className="hover:text-white transition-transform duration-200">Features</a>
          <a href="#" className="hover:text-white transition-transform duration-200">Customers</a>
          <a href="#" className="hover:text-white transition-transform duration-200">Pricing</a>
          <a href="#" className="hover:text-white transition-transform duration-200">Help</a>
          <a href="#" className="hover:text-white transition-transform duration-200">Career</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2023 theBappy.com | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
