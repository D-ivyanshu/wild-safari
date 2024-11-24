import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Images from "../assets/images";
import AnimatedHamburgerButton from "../components/AnimatedBurgerButton";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/" },
  { title: "Safari Booking", href: "/" },
  { title: "Gallery", href: "/" },
  { title: "Contact Us", href: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center lg:px-5 py-1">
        <img src={Images.Logo} alt="" className="h-[180px] w-[130px]" />
        <div
          className="cursor-pointer text-md text-white z-10"
          onClick={toggleMenu}
        >
          <AnimatedHamburgerButton />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              background:
                "linear-gradient(180deg, #ff7f56 10%, #ff7f56 50%, #e63e9c 90%)",
            }}
            className="fixed left-0 top-0 w-full h-screen origin-top text-black px-5 py-10"
          >
            <div className="flex h-screen flex-col overflow-hidden">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="z-20 flex flex-col h-full justify-center font-lora items-center gap-8 md:gap-10"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileLink {
  title: string;
  href: string;
}

const MobileNavLink = ({ title, href }: MobileLink) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-3xl lg:text-5xl uppercase text-white"
    >
      <a href={href}>{title}</a>
    </motion.div>
  );
};
