import React, { useState } from "react";

const CampDetails = () => {
  const [campName, setCampName] = useState('');
  const [campCode, setCampCode] = useState('');
  const [campGoal, setCampGoal] = useState('');
  const [campLocation, setCampLocation] = useState('');
  const [campStart, setCampStart] = useState('');
  const [campEnd, setCampEnd] = useState('');
  const [campCategory, setCampCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-[6vh] h-[94vh] w-full relative">
      <div className="absolute top-[2vh] left-[4vw] font-semibold text-blue-500 text-5xl">
        CREATE CAMPAIGN
      </div>
      <form onSubmit={submitHandler} className="w-full h-[81vh] absolute top-[12vh] px-[10vh] py-5 flex justify-between">
        <div className=" w-[65vw]">
          <div className="p-2 m-2">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign Name *</h3>
            <input
              value={campName}
              onChange={(e) => setCampName(e.target.value)}
              className="text-lg p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
              type="text"
              placeholder="genuity"
            />
          </div>
          <div className="p-2 m-2">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign Location *</h3>
            <input
              value={campLocation}
              onChange={(e) => setCampLocation(e.target.value)}
              className="text-lg p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
              type="text"
              placeholder="BH-2 room no 650"
            />
          </div>
          <div className="p-2 m-2">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign Code *</h3>
            <input
              value={campCode}
              onChange={(e) => setCampCode(e.target.value)}
              className="text-lg p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
              type="text"
              placeholder="069420"
            />
          </div>
          <div className="p-2 m-2">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign Goal *</h3>
            <input
              value={campGoal}
              onChange={(e) => setCampGoal(e.target.value)}
              className="text-lg p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
              type="text"
              placeholder="to win gsc"
            />
          </div>
        </div>
        <div className=" w-[25vw]">
          <div className="p-2 m-2">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign Start Date *</h3>
            <input
              value={campStart}
              onChange={(e) => setCampStart(e.target.value)}
              className="text-sm p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
              type="date"
            />
          </div>
          <div className="p-2 m-3 mt-4">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign End Date *</h3>
            <input
              value={campEnd}
              onChange={(e) => setCampEnd(e.target.value)}
              className="text-sm p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
              type="date"
            />
          </div>
          <div className="p-2 m-3 mt-4">
            <h3 className="text-blue-500 font-semibold text-2xl">Campaign Category *</h3>
            <select
            value={campCategory}
            onChange={(e) => setCampCategory(e.target.value)}
            className="text-sm  p-2 w-full mt-1 rounded bg-blue-50 outline-none border-[2px] border-blue-500"
          >
            <option value="" disabled>Select a category</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="environment">Environment</option>
            <option value="finance">Sports</option>
          </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CampDetails;
