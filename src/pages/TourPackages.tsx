import { Fade } from "react-awesome-reveal";
import Images from "@/assets/images";
import TourCard from "@/components/TourCard";

const TourPackages = () => {
  return (
    <>
      <Fade
        direction="up"
        triggerOnce
        className="flex justify-center items-center flex-col"
      >
        <div className="my-6 flex justify-center items-center flex-col">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center items-center px-10">
            <div className="tracking-wide w-full">
              <h1 className="text-md lg:text-lg text-[#DF6951]">
                Let's Explore
              </h1>
              <h1
                className="text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Tour Packages
              </h1>
            </div>
          </div>

          <TourCard
            imgLink={Images.TourWeekend}
            heading={"Corbett Weekend Tour"}
            subHeading={"Jim Corbett All Zones"}
            vehicle={"Jeep"}
            days={"3 Days"}
            nights={"2 Nights"}
            meals={"All Meals"}
          />
          <TourCard
            imgLink={Images.TourDhikala}
            heading={"Dhikala Tiger Tour"}
            subHeading={"Dhikala Zone"}
            vehicle={"Jeep"}
            days={"3 Days"}
            nights={"2 Nights"}
            meals={"All Meals"}
          />
          <TourCard
            imgLink={Images.TourWeekend}
            heading={"Corbett Nainital Tour"}
            subHeading={"Nanital"}
            vehicle={"Jeep"}
            days={"5 Days"}
            nights={"4 Nights"}
            meals={"All Meals"}
          />
        </div>
      </Fade>
    </>
  );
};

export default TourPackages;
