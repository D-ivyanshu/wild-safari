import ServiceCard from "@/components/ServiceCard";
import { Fade } from "react-awesome-reveal";
import Images from "@/assets/images";

const Service = () => {
  return (
    <>
      <Fade
        direction="up"
        triggerOnce
        className="flex justify-center items-center flex-col"
      >
        <div className="flex flex-col items-center my-6">
          {/* Heading */}
          <div className="tracking-wide flex flex-col justify-center items-center">
            <h1 className="text-md lg:text-lg text-[#DF6951]">Services</h1>
            <h1
              className="text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Plan your safari
            </h1>
          </div>
          {/* Cards */}

          <ServiceCard
            imgLink={Images.Jeep}
            heading={"Corbett Jeep Safari"}
            capacity={"6 per Jeep"}
            time={"Morning & Evening"}
            duration={"3 hours"}
            departure={"Ramnagar"}
          />
          <ServiceCard
            imgLink={Images.Canter}
            heading={"Dhikala Canter Safari "}
            capacity={"16 per Canter"}
            time={"Morning & Evening"}
            duration={"5 hours"}
            departure={"Ramnagar"}
          />
        </div>
      </Fade>
    </>
  );
};

export default Service;
