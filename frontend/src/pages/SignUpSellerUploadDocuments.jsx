import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadDocuments = () => {
  // State for form inputs
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [businessContactNumber, setBusinessContactNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({ lat: 28.6139, lng: 77.209 }); // Default to Delhi
  const [otp, setOtp] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0); // Dynamic progress
  const [showUploadSection, setShowUploadSection] = useState(false); // Toggle upload section
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store uploaded files
  const [sellerId, setSellerId] = useState(null);
  const [base64Files,setBase64Files]=useState([])
  const navigate = useNavigate();


  // Required documents list (only 4 are necessary)
  const requiredDocuments = [
    "Birth Certificate of Owner (1)",
    "GoI Rural Area Certificate (1)",
    "Voter ID Card (1)",
    "Permanent Residential Certificate (1)",
  ];

  // Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "VITE_apiKey", // Replace with your Google Maps API key
  });

  // Calculate progress dynamically
  useEffect(() => {
    const fields = [
      aadharNumber,
      panNumber,
      businessContactNumber,
      upiId,
      bankAccountNumber,
      selectedLocation,
      otp,
    ];
    const filledFields = fields.filter((field) => field !== "" && field !== null).length;
    const totalFields = fields.length;

    // Calculate progress for form fields
    const formProgress = Math.round((filledFields / totalFields) * 50); // Form contributes 50% to progress

    // Calculate progress for uploaded files (only 4 are necessary)
    const uploadedFilesCount = uploadedFiles.length;
    const totalRequiredFiles = requiredDocuments.length; // 4 documents
    const uploadProgress = Math.round((uploadedFilesCount / totalRequiredFiles) * 50); // Uploads contribute 50% to progress

    // Total progress
    const totalProgress = formProgress + uploadProgress;
    setUploadProgress(totalProgress > 100 ? 100 : totalProgress); // Cap progress at 100%
  }, [aadharNumber, panNumber, businessContactNumber, upiId, bankAccountNumber, selectedLocation, otp, uploadedFiles]);


  useEffect(() => {
    const storedSellerId = sessionStorage.getItem("sellerId");
    if (!storedSellerId) {
        alert("Seller ID not found! Please complete the first form.");
        window.location = "/"; // Redirect to the first form if sellerId is missing
    } else {
        setSellerId(storedSellerId); // Set sellerId from sessionStorage
    }
}, []);

const handleDrop = (e) => {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);
  const newFiles = files.map(file => ({
    name: file.name,
    progress: 100, // Set initial progress to 100% for simplicity
    file: file
  }));
  
  setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
};
  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Aadhar Number:", aadharNumber);
    console.log("PAN Number:", panNumber);
    console.log("Business Contact Number:", businessContactNumber);
    console.log("UPI ID:", upiId);
    console.log("Bank Account Number:", bankAccountNumber);
    console.log("Selected Location:", selectedLocation);
    console.log("OTP:", otp);
    console.log("Uploaded Files:", uploadedFiles);

    
        
        try {
          const newFiles=[]
          for (const file of uploadedFiles) {
              
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    //console.log(`File: ${file.name}, Base64: ${reader.result}`);
                    newFiles.push(reader.result)
                  }
                  
              
              
          }
          setBase64Files(newFiles)
          if(base64Files)
            console.log("base64",base64Files)
          else 
            console.log("no base64")
            const response = await axios.post(
                `https://google-solution-challenge.onrender.com/api/upload/sellers/${sellerId}/details`,
                { details: {
                  aadharNumber:aadharNumber,
                  panNumber:panNumber,
                  businessContactNumber:businessContactNumber,
                  upiId:upiId,
                  bankAccountNumber:bankAccountNumber,
                  selectedLocation:selectedLocation
                }, 
                documents:base64Files}
            );
            console.log("Documents uploaded")
            console.log(response)


        } catch (error) {
            console.error("Error saving details:", error);
            alert("Failed to save details");
        }



    alert("Submitted for Review!");
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    console.log("OTP Verified:", otp);
    alert("OTP Verified Successfully!");
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    console.log(files)
    setUploadedFiles((prevFiles)=>[...prevFiles,...files])
    

    
   
    console.log("uploaded files:",uploadedFiles)
    e.target.value=[]

  };


  

  // Handle file upload
  

  // Handle file removal
  


  // Clear all form entries
  const handleClearForm = () => {
    setAadharNumber("");
    setPanNumber("");
    setBusinessContactNumber("");
    setUpiId("");
    setBankAccountNumber("");
    setSelectedLocation({ lat: 28.6139, lng: 77.209 });
    setOtp("");
    setUploadedFiles([]);
  };

  // Save progress and exit
  const handleSaveProgress = () => {
    const progressData = {
      aadharNumber,
      panNumber,
      businessContactNumber,
      upiId,
      bankAccountNumber,
      selectedLocation,
      otp,
      // We can't store File objects in localStorage, so just store names
      uploadedFileNames: uploadedFiles.map(file => file.name || file.file.name)
    };
    localStorage.setItem("savedProgress", JSON.stringify(progressData));
    alert("Progress saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-[6vh] pt-0 overflow-hidden">
      {/* Page Title and Save Progress Button */}
      <h1 className="text-center text-3xl font-bold mb-4">UPLOAD DOCUMENTS</h1>

      {/* Progress Bar and Percentage */}
      <div className="flex items-center mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
        <span className="ml-4 text-sm text-blue-700">{uploadProgress}%</span>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full overflow-hidden">
        {/* Form Section */}
        <div
          className={`transition-transform duration-500 ease-in-out ${
            showUploadSection ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Form */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Document Details</h2>
              <p className="text-left text-red-500 mb-6">* marked are compulsory</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">*Aadhar Number</label>
                  <input
                    type="text"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">*PAN Number</label>
                  <input
                    type="text"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">*Business Contact Number</label>
                  <input
                    type="text"
                    value={businessContactNumber}
                    onChange={(e) => setBusinessContactNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">*UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">*Bank Account Number</label>
                  <input
                    type="text"
                    value={bankAccountNumber}
                    onChange={(e) => setBankAccountNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Right Section - Google Maps and OTP Verification */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              {/* Google Maps Section */}
              <h2 className="text-xl font-semibold mb-4">*Choose a Pickup Point for Deliveries</h2>
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "300px" }}
                  zoom={12}
                  center={selectedLocation}
                  onClick={(e) =>
                    setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                  }
                >
                  <Marker
                    position={selectedLocation}
                    draggable={true}
                    onDragEnd={(e) =>
                      setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                    }
                  />
                </GoogleMap>
              ) : (
                <p>Loading Map...</p>
              )}

              {/* OTP Verification Section */}
              <div className="mt-6">
                <hr className="my-4" />
                <h2 className="text-xl font-semibold mb-4">Aadhar Verification</h2>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    maxLength={6}
                  />
                  <button
                    onClick={handleVerifyOtp}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    type="button"
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clear and Next Buttons */}
          <div className="flex justify-end mt-3 space-x-4">
            <button
              onClick={handleSaveProgress}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              type="button"
            >
              Save Progress and Exit
            </button>
            <button
              onClick={handleClearForm}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              type="button"
            >
              Clear
            </button>
            <button
              onClick={() => setShowUploadSection(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              type="button"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div
          className={`absolute top-0 left-full w-full transition-transform duration-500 ease-in-out ${
            showUploadSection ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Section - List of Documents */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
                <ul className="list-disc list-inside">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="text-lg mb-2">{doc}</li>
                  ))}
                </ul>
                {/* Previous Button */}
                <div className="mt-8">
                  <button
                    onClick={() => setShowUploadSection(false)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    type="button"
                  >
                    ← Previous
                  </button>
                </div>
              </div>

              {/* Right Section - Upload Multiple Files */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4 text-center">Upload</h2>
                {/* Drag & Drop Upload Box */}
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <img
                      src="/pics/cloud.png"
                      alt="Upload"
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <p className="text-gray-600">
                      Drag & drop files or <span className="text-blue-600 underline cursor-pointer">Browse</span>
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      multiple

                      name="uploadedFiles"

                      accept=".jpeg,.png,.gif,.mp4,.pdf,.psd,.ai,.docx,.ppt"

                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {/* Uploaded Files List with Progress Bar */}
                <div className="mt-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded-lg mb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm">{file.name || file.file.name}</span>
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                          type="button"
                        >
                          ✖
                        </button>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-300 h-1 mt-2 rounded-full">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{ width: `${file.progress || 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upload Button */}
                <button 
                  className="w-full bg-blue-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-blue-700"
                  type="button"
                >
                  UPLOAD FILES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit for Review Button */}
      {uploadProgress === 100 && (
        <div className="flex justify-end mt-8">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Submit for Review
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadDocuments;