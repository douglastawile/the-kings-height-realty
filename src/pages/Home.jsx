import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import "../styles/fadeIn.css";
import "../styles/home.css";

const Home = () => {
  return (
    <main role="main" className="h-screen min-h-screen mb-16 bg-home">
      <HomeCarousel />
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col justify-center items-center text-center"
        aria-labelledby="welcome-heading"
      >
        <h1
          id="welcome-heading"
          className="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text-6xl fade-in"
        >
          <span className="bebas-neue-regular">Welcome to</span> <br />
          <hr className="h-1 my-2 bg-slate-300 border-0 dark:bg-slate-700" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            The Kings Height Realty
          </span>
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl font-normal text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8"
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
