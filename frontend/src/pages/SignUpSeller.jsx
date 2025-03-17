import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const SignUpSeller = () => {
  // State for form inputs
  const [sellerName, setSellerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State for password
  const [logoFile, setLogoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0); // State for upload progress
  const navigate=useNavigate()
  
  
  
  
  
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
              
              const res=await fetch("http://localhost:7000/api/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ idToken: idToken})
              });
              console.log("Sign-In successful!");
              const json=await res.json()
              console.log(json)
          } catch (error) {
              console.error("Error signing in:", error.message);
          }
      }
  
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller Name:", sellerName);
    console.log("Email:", email);
    console.log("Password:", password); // Log the password
    console.log("Logo File:", logoFile);
  };

  const handleLogoChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleNext=(e)=>{
    e.preventDefault();

        
    const reader = new FileReader();
        reader.readAsDataURL(logoFile);
        reader.onloadend = async () => {
            const base64Logo = reader.result.split(",")[1];
            try {
                const response = await axios.post("http://localhost:7000/api/upload/sellers", {
                    sellerName:sellerName,
                    email:email,
                    password: password,
                    logoFile: base64Logo,
                });
                const { sellerId } = response.data;
                sessionStorage.setItem("sellerId", sellerId)
                console.log("Seller created successfully!");
                
                navigate('/sign-up-seller-upload-documents');
                console.log(response);
                signIn(email,password)
                
            } catch (error) {
                console.error("Error creating seller:", error);
                console.log("Failed to create seller");
            }
  }
  
}

  return (
    <div className="mt-[6vh] h-[94vh] w-full flex justify-center items-center gap-8">
      {/* Sign Up Form Container */}
      <div className="relative w-[35vw] h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-white rounded-xl p-[1px]">
          <div className="h-full w-full bg-gradient-to-b from-cyan-100 to-white rounded-xl flex flex-col justify-center items-center p-8">
            {/* Sign Up Heading */}
            <h1 className="text-3xl font-bold mb-2">SELLER SIGN UP</h1>
            <p className="text-gray-600 mb-4">Provide your details to get started!</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Organization/Seller Name"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <div className="w-full flex flex-col space-y-2">
                <label className="text-gray-600">Upload Logo</label>
                <input
                  type="file"
                  name="logoFile"
                  onChange={handleLogoChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label className="text-gray-600">Upload Documents</label>
                <div className="w-full p-2 border border-gray-300 rounded-md flex items-center justify-between">
                <Link
                    onClick={handleNext} // Replace with your desired route
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Upload Documents
                  </Link>
                  <span className="text-gray-500">
                    {uploadProgress === 0 ? "0% Complete" : `${uploadProgress}% Uploaded`}
                  </span>

                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-[5vh]"
              >
                Sign Up
              </button>
            </form>

            {/* Login Text */}
            <p className="mt-8 text-gray-600">
              Already have an account?{" "}
              <Link 
              to="/login"
              className="text-blue-500 cursor-pointer hover:underline">
                Login
              </Link>
            </p>

            {/* Footer Links */}
            <div className="mt-3 text-center space-x-4">
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

export default SignUpSeller;