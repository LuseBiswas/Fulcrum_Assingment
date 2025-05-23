import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import unstop_logo from "../../assets/unstop-logo.svg";
import login_img_1 from '../../assets/login-img-1.webp';
import img1 from '../../assets/login-img-1.webp'
import img2 from '../../assets/login-img-2.webp'
import img3 from '../../assets/login-img-3.webp'
import img4 from '../../assets/login-img-4.webp'
import { EyeOff, Eye } from "lucide-react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Simulate successful login by storing a token
      localStorage.setItem("authToken", "sample-token");
      navigate("/dashboard");
    } else {
      setErrors(validationErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Main container with top and bottom rounded corners */}
      <div className="w-full max-w-3xl max-h-[900px] bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[65px] overflow-hidden shadow-lg flex">
        {/* Left Side - Promotional/Brand Section with matching rounded corners */}
        <div className="m-3 hidden md:flex md:w-1/2 bg-yellow-400 relative overflow-hidden rounded-tl-2xl rounded-tr-[65px]  rounded-bl-[65px]">
          <div
            className="absolute inset-0 bg-opacity-10 bg-[#FFC700]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="absolute top-0 left-0 p-6 z-20">
            <div className="h-20 w-20">
              <img src={unstop_logo} alt="Unstop Logo" />
              
            </div>
          </div>

          <div className="relative z-10  flex flex-col justify-between h-full">
            {/* Main content */}
            <div className="relative w-full h-full overflow-hidden mt-32">
                <img src={img1} alt="" className="w-[450px] h-[350px]"  />
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Log in
            </h1>

            {/* Role selector */}
            <div className="flex mb-6 bg-gray-100 p-1 rounded-full">
              <button className="flex-1 py-2 px-4 rounded-full bg-blue-900 text-white text-sm font-medium">
                As Candidate
              </button>
              <button className="flex-1 py-2 px-4 text-gray-600 text-sm font-medium">
                As Recruiter
              </button>
            </div>

            {/* Social login options */}
            <div className="space-y-4 mb-6">
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.041 18.013C14.951 18.715 13.538 19.11 12 19.11c-3.2 0-5.904-2.065-6.934-4.947l-4.026 3.111C3.05 21.3 7.172 24 12 24c3.104 0 5.708-1.114 7.688-2.988l-3.647-2.998Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.688 21.012C21.73 19.023 23 16.173 23 12c0-.703-.071-1.375-.195-2.035H12v4.486h6.195c-.29 1.561-1.095 2.885-2.305 3.795l3.798 2.766Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.066 14.164C4.838 13.477 4.71 12.73 4.71 11.969c0-.77.128-1.516.356-2.203L1.04 6.65C.37 8.31 0 10.13 0 12c0 1.87.37 3.691 1.04 5.35l4.026-3.186Z"
                  />
                </svg>
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <svg
                  className="h-5 w-5 mr-2 text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
                Login with LinkedIn
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or login with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email Id"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div className="mb-6 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {showPassword ? (
                      <Eye/>
                    ) : (
                      <EyeOff/>
                    )}
                  </svg>
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="flex justify-end mb-6">
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors font-medium cursor-pointer"
              >
                Login
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
