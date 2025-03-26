import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

const Header = () => {
  return (
    <header className="sticky z-20 top-0 backdrop-blur-sm">
      <div className="flex gap-3 justify-center items-center py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your workflow & boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" height={40} width={40} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#" className="hover:text-black transition-transform duration-200">About</a>
            <a href="#" className="hover:text-black transition-transform duration-200">Features</a>
            <a href="#" className="hover:text-black transition-transform duration-200">Customers</a>
            <a href="#" className="hover:text-black transition-transform duration-200">Update</a>
            <a href="#" className="hover:text-black transition-transform duration-200">Helps</a>
            <button className="btn">Get for free</button>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header