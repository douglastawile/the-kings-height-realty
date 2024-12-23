import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main role="main" className="min-h-screen mb-16">
      <HomeCarousel />
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col justify-center items-center text-center"
        aria-labelledby="welcome-heading"
      >
        <h1
          id="welcome-heading"
          className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white max-w-4xl"
        >
          <Typewriter
            options={{
              strings: ["Welcome to The Kings Height Realty"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50, // Speed to erase the text
            }}
          />
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          role="contentinfo"
        >
          Your trusted partner for real estate and construction services.
        </p>
        <div className="w-full sm:w-auto">
          <Link
            to="/services"
            className="inline-block w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-center transition-all duration-300 ease-in-out hover:scale-105"
            role="button"
            aria-label="Explore Our Services"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
