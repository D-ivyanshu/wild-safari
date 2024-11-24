import Images from "@/assets/images";

interface ServiceCardProps {
  imgLink: string;
  heading: string;
  capacity: string;
  time: string;
  duration: string;
  departure: string;
}

const ServiceCard = ({
  imgLink,
  heading,
  capacity,
  time,
  duration,
  departure,
}: ServiceCardProps) => {
  return (
    <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-md border border-slate-200 rounded-lg w-10/12 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 m-2.5 overflow-hidden bg-black text-white rounded-md">
        <img
          className="object-fit transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={imgLink}
          alt="investment-seed-round"
        />
      </div>
      <div className="px-5 py-3">
        <h6
          className="mb-2 text-slate-700 text-xl font-medium"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {heading}
        </h6>
        <p className="text-slate-700 leading-normal font-normal">
          <ul>
            <li>Max People : {capacity}</li>
            <li>Duration : {duration}</li>
            <li>Timings : {time}</li>
            <li>Departure : {departure}</li>
          </ul>
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-3 relative">
        <button className="bg-gradient-to-r from-[#FF9413] to-[#DF6951] text-white font-medium px-5 w-28 h-10 rounded-2xl py-2 hover:opacity-90 transition-opacity text-lg flex items-center justify-center">
          <h1 className="text-sm">Book now</h1>
        </button>
        <img
          src={Images.RegClaw}
          alt=""
          className="absolute right-5 bottom-4 h-16 w-16 -rotate-12"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
