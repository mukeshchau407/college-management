import { FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Service from "./Service";
import bgImage from "../../assets/bgimage.png";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
      <div className="relative w-full h-[95vh] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white z-10" />
        <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 h-[90vh] flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
            <div className="md:w-1/2 space-y-4 text-white text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-3xl text-red-500">
                <FaGraduationCap />
                <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center md:text-left">
                  24 Years of Excellence in Truly Management Education
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black ">
                Welcome to Hamro Pathsala
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                Discover amazing features and services that will transform your
                experience. Our platform is designed to help you achieve your
                goals with ease and efficiency.
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => navigate("/explore")}
                  className="flex gap-2 items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Explore More
                  <FaArrowRight className="-rotate-45 mt-0.5" />
                </button>
              </div>
            </div>
            <div>
              <img src={bgImage} alt="bgimage" className="h-74" />
            </div>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Home;
