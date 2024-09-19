import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setScrolled(true); // Add border after scrolling
    } else {
      setScrolled(false); // Remove border when at top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b-2 border-gray-300 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left Side: App Name */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-purple-600">SyncChat</h1>
        </div>

        {/* Right Side: Login/Signup Links */}
        <div className="flex items-center space-x-6">
          <a
            href="#auth-section" // Same ID for both links
            className="text-sm font-medium text-gray-600 hover:text-purple-500 transition-all duration-200"
          >
            Login
          </a>
          <a
            href="#auth-section" // Same ID for both links
            className="text-sm font-medium text-gray-600 hover:text-purple-500 transition-all duration-200"
          >
            Signup
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
