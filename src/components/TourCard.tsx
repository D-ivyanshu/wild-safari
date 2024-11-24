import { Utensils, Sun, Moon } from "lucide-react";
import { GiJeep } from "react-icons/gi";

interface TourCardProps {
  subHeading: string;
  imgLink: string;
  heading: string;
  meals: string;
  days: string;
  nights: string;
  vehicle: string;
}

const TourCard = ({
  subHeading,
  imgLink,
  heading,
  meals,
  days,
  nights,
  vehicle,
}: TourCardProps) => {
  return (
    <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-md border border-slate-200 rounded-lg w-10/12 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-92 mb-5 overflow-hidden text-white rounded-t-md">
        <img
          className="object-fit transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={imgLink}
          alt="investment-seed-round"
        />
      </div>
      <div className="px-4">
        <h6
          className=" text-slate-700 text-sm font-"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {subHeading}
        </h6>
        <h6
          className="mb-2 text-slate-700 text-xl font-medium"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {" "}
          {heading}
        </h6>
        <div className="flex flex-col w-4/5 font-normal text-slate-600">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between items-start">
              <div className="flex items-center justify-center gap-x-1">
                <Utensils size={20} />
                <h1>{meals}</h1>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                <Sun size={20} />
                <h1>{days}</h1>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start">
              <div className="flex items-center justify-center gap-x-1">
                <GiJeep size={30} />
                <h1>{vehicle}</h1>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                <Moon size={20} />
                <h1>{nights}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 pt-0 mt-5">
        <button className="bg-gradient-to-r from-[#FF9413] to-[#DF6951] text-white font-medium px-5 w-28 h-10 rounded-2xl py-2 hover:opacity-90 transition-opacity text-lg flex items-center justify-center">
          <h1 className="text-sm">Book now</h1>
        </button>
      </div>
    </div>
  );
};

export default TourCard;
