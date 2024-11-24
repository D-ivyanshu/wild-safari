import Images from "../assets/images";
import Navbar from "./Navbar";
import ModalWrapper from "../components/SpringModal";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen text-white overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Images.HeroBannerSm}
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col justify-center">
          <div>
            <Navbar />
          </div>
          <div className="mt-[80px] flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-[34px] md:text-5xl font-bold mb-2 text-white">
              Get Closer to the Wild
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Your Ultimate Safari Awaits!
            </p>
            <ModalWrapper />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
