import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit =async  (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email/Phone:", emailOrPhone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    const res=await fetch("http://localhost:7000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: emailOrPhone,
        password: password
      })
  });
    const json=await res.json();
    console.log(json)
  };

  return (
    <div className="mt-[6vh] h-[94vh] w-full flex justify-center items-center gap-8">
      {/* Login Form Container */}
      <div className="relative w-[35vw] h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-white rounded-xl p-[1px]">
          <div className="h-full w-full bg-gradient-to-b from-cyan-100 to-white rounded-xl flex flex-col justify-center items-center p-8">
            {/* Login Heading */}
            <h1 className="text-3xl font-bold mb-2">SIGN UP</h1>
            <p className="text-gray-600 mb-4">Just some details to get you in!</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Email/Phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>

            {/* Forgot Password */}
            {/* <p className="text-red-500 text-sm mt-1">Forgot password?</p> */}

            {/* Divider with "or" */}
            <div className="w-full flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login Options */}
            <div className="w-full flex justify-center space-x-4">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <img
                  src="https://www.facebook.com/favicon.ico"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* Sign-up Text */}
            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <Link 
              to="/login"
              className="text-blue-500 cursor-pointer hover:underline">
                Login
              </Link>
            </p>

            {/* Footer Links */}
            <div className="mt-3 text-center space-x-4">
              <a href="#" className="text-gray-500 text-sm hover:underline">
                Customer Care
              </a>
              <a href="#" className="text-gray-500 text-sm hover:underline">
                Support
              </a>
              <a href="#" className="text-gray-500 text-sm hover:underline">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-[35vw] h-[80vh] rounded-xl">
        <img
          src="pics/collageFrame1.png"
          alt="Decorative"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;