import SwipeCards from "@/components/SwipeCards";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <Fade direction="up" triggerOnce>
      <div className="flex flex-col items-center my-6">
        {/* Heading */}
        <div className="tracking-wide flex flex-col justify-center items-center">
          <h1 className="text-md lg:text-lg text-[#DF6951]">
            Captured Moments
          </h1>
          <h1
            className="text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Wildlife Wonders
          </h1>
        </div>
        <SwipeCards />
      </div>
    </Fade>
  );
};

export default Gallery;
