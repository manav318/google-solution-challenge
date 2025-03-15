import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const Login = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //CLIENT SIDE FIREBASE INTEGRATION
    
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_apiKey,
      authDomain: import.meta.env.VITE_authDomain,
      projectId: import.meta.env.VITE_projectID,
      storageBucket: import.meta.env.VITE_storageBucket,
      messagingSenderId: import.meta.env.VITE_messagingSenderId,
      appId: import.meta.env.VITE_appID
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  
  async function signIn(email, password) {
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const idToken = await userCredential.user.getIdToken(); 
          
          await fetch("http://localhost:7000/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ idToken })
          });
          console.log("Sign-In successful!");
      } catch (error) {
          console.error("Error signing in:", error.message);
      }
  }


  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);
    signIn(email,password)
  };

  return (
    <div className="mt-[6vh] h-[94vh] w-full flex justify-center items-center gap-8">
      {/* Login Form Container */}
      <div className="relative w-[35vw] h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-white rounded-xl p-[1px]">
          <div className="h-full w-full bg-gradient-to-b from-cyan-100 to-white rounded-xl flex flex-col justify-center items-center p-8">
            {/* Login Heading */}
            <h1 className="text-3xl font-bold mb-2">LOGIN</h1>
            <p className="text-gray-600 mb-8">glad you are back!</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>

            {/* Forgot Password */}
            <p className="text-red-500 text-sm mt-2">Forgot password?</p>

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
            <p className="mt-8 text-gray-600">
              Don't have an account?{" "}
              <Link 
              to="/sign-up-redirect"
              className="text-blue-500 cursor-pointer hover:underline">
                Sign-up
              </Link>
            </p>

            {/* Footer Links */}
            <div className="mt-6 text-center space-x-4">
              <Link to="/customer-care" className="text-gray-500 text-sm hover:underline">
                Customer Care
              </Link>
              <Link to="/support" className="text-gray-500 text-sm hover:underline">
                Support
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-500 text-sm hover:underline">
                Terms and Conditions
              </Link>
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