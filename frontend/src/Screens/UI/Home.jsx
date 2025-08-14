import { FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { useAppContext } from "../../contexts/AppContext";
import bgVideo from "../../assets/videoplayback.mp4";
import Service from "./Services";

const Home = () => {
  const { navigate } = useAppContext();

  return (
    <>
      <div className="relative w-full h-[95vh] overflow-hidden">
        {/* Background Video */}
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0 z-[-50]"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[-40]" />

        {/* Foreground Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 h-[90vh] flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
            <div className="md:w-1/2 space-y-4 text-white text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-3xl text-red-500">
                <FaGraduationCap />
                <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center md:text-left">
                  24 Years of Excellence in Truly Management Education
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                Welcome to Our Awesome Website
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
                Discover amazing features and services that will transform your
                experience. Our platform is designed to help you achieve your
                goals with ease and efficiency.
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => navigate("explore")}
                  className="flex gap-2 items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Explore More
                  <FaArrowRight className="-rotate-45 mt-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Service />
    </>
  );
};

export default Home;
