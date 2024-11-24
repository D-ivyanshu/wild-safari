import Images from "@/assets/images";

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center py-5 lg:py-20">
        <div className="w-5/6 lg:w-4/5 xl:w-3/4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Image Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-start lg:mb-0">
            <img
              src={Images.Welcome}
              alt="Jim Corbett National Park"
              className="h-full w-[350px] lg:h-full lg:w-[500px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left">
            <div className="tracking-wide">
              <h1 className="text-md lg:text-lg text-[#DF6951]">Welcome</h1>
              <h1
                className="text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Jim Corbett National Park
              </h1>
            </div>
            {/* Image for Mobile */}
            <div className="lg:hidden flex justify-center py-5">
              <img
                src={Images.Welcome}
                alt="Jim Corbett National Park"
                className="h-72 w-[350px] object-cover"
              />
            </div>
            <div
              className="py-5 w-full px-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <h1 className="text-sm leading-6 lg:leading-8 text-[#2A2A2F] lg:text-base">
                Welcome to Jim Corbett National Park, India’s first national
                park, located in Uttarakhand’s Nainital district. Nestled in the
                Himalayan foothills, it’s a perfect getaway with breathtaking
                landscapes, serene rivers, and rich wildlife, offering an
                authentic wilderness experience for nature lovers.
                <h1 className="hidden lg:flex">
                  With its dense forests, rolling grasslands, and a variety of
                  flora and fauna, the park is a sanctuary for the endangered
                  Bengal tiger and other magnificent wildlife. Visitors can
                  enjoy thrilling jeep safaris, birdwatching, and serene nature
                  walks, immersing themselves in the beauty of this iconic
                  destination. Whether you seek adventure or a peaceful retreat,
                  Jim Corbett National Park offers an unforgettable escape into
                  nature's embrace.
                </h1>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
