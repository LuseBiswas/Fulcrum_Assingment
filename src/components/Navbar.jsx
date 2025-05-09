import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import unstop_logo from "../assets/unstop-logo.svg";

function Navbar({ isProfileOpen, setIsProfileOpen, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsProfileOpen]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <div className="flex items-center h-20 w-20">
                <img src={unstop_logo} alt="Unstop Logo" />
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Internships"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/internships"
              className="text-blue-600 font-medium px-3 py-2 rounded-md"
            >
              Internships
            </Link>
            <Link
              to="/jobs"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Jobs
            </Link>
            <Link
              to="/competitions"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Competitions
            </Link>
            <Link
              to="/mentorships"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Mentorships
            </Link>
            <Link
              to="/practice"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Practice
            </Link>

            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <Link
                      to="/resources"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Resources
                    </Link>
                    <Link
                      to="/events"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Events
                    </Link>
                    <Link
                      to="/courses"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Courses
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="text-gray-600 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Messages */}
            <button className="text-gray-600 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </button>

            {/* Host Button */}
            <button className="hidden md:flex items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Host
            </button>

            {/* Business Button */}
            <button className="hidden md:flex items-center bg-yellow-100 border border-yellow-400 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              For Business
            </button>

            {/* Profile Menu */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/api/placeholder/32/32"
                    alt="User Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 border-t border-gray-200">
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="Search Internships"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-7 top-20 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <Link
              to="/internships"
              className="block px-4 py-2 text-blue-600 font-medium"
            >
              Internships
            </Link>
            <Link to="/jobs" className="block px-4 py-2 text-gray-700">
              Jobs
            </Link>
            <Link to="/competitions" className="block px-4 py-2 text-gray-700">
              Competitions
            </Link>
            <Link to="/mentorships" className="block px-4 py-2 text-gray-700">
              Mentorships
            </Link>
            <Link to="/practice" className="block px-4 py-2 text-gray-700">
              Practice
            </Link>
            <Link to="/resources" className="block px-4 py-2 text-gray-700">
              Resources
            </Link>
            <Link to="/events" className="block px-4 py-2 text-gray-700">
              Events
            </Link>
            <Link to="/courses" className="block px-4 py-2 text-gray-700">
              Courses
            </Link>

            <div className="flex space-x-2 px-4 pt-4">
              <button className="flex-1 flex justify-center items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Host
              </button>

              <button className="flex-1 flex justify-center items-center bg-yellow-100 border border-yellow-400 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                For Business
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
