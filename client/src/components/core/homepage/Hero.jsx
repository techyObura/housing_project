import { Link } from "react-router-dom";
import heroImage from "../../../assets/hero-image.jpg"; // You can replace with your image path

const Hero = () => {
  return (
    <section className="bg-[var(--color-gray-light)] text-[var(--color-gray-dark)] relative overflow-hidden">
      {/* Background SVG or pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3ab7bf"
            fillOpacity="0.2"
            d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,160C672,149,768,139,864,149.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32 lg:py-40 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Find Safe & Verified Housing Across Africa
          </h1>
          <p className="text-lg sm:text-xl text-gray-100">
            Discover verified rentals, hire trusted helpers, and connect with a
            vibrant housing community — all in one app.
          </p>

          <div className="flex space-x-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-[var(--color-teal-secondary)] hover:bg-[var(--color-bermuda)] rounded-lg font-semibold text-white shadow-lg transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 border border-[var(--color-gray-dark)] rounded-lg font-semibold text-[var(--color-gray-dark)] hover:bg-white hover:text-[var(--color-blue-primary)] transition"
            >
              Login
            </Link>
          </div>

          <div className="mt-6 text-sm text-[var(--color-gray-dark)]">
            Trusted by thousands of tenants, landlords, and helpers across
            Kenya.
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={heroImage}
            alt="Africa Housing Hero"
            className="rounded-xl shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
