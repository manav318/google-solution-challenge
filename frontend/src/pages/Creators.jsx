import React from "react";

const Creators = () => {
  const creators = [
    {
      id: 1,
      name: "Yash Pratap Singh Deora",
      image: "pics/ypsd.jpg", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/yash-pratap-singh-deora-37b769290/",
      github: "https://github.com/yash21755",
    },
    {
      id: 2,
      name: "Manav Ekka",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/creator2",
      github: "https://github.com/creator2",
      instagram: "https://www.instagram.com/creator2",
    },
    {
      id: 3,
      name: "Harsh Krishnan",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/creator3",
      github: "https://github.com/creator3",
      instagram: "https://www.instagram.com/creator3",
    },
    {
      id: 4,
      name: "Tammana Kapoor",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/creator4",
      github: "https://github.com/creator4",
      instagram: "https://www.instagram.com/creator4",
    },
  ];

  return (
    <>
    <div className="flex justify-center w-screen">
        <h1 className="text-5xl text-centre mt-[10vh] font-bold">The Hands And Minds Of GENUITY</h1>
    </div>
    <div className="mt-[10vh] flex flex-wrap justify-center gap-[5vw] ">
      {creators.map((creator) => (
        <div key={creator.id} className="text-center border-2 border-black rounded-lg p-2 shadow-2xl bg-blue-50">
          <img
            src={creator.image}
            alt={creator.name}
            className="w-[17vw] h-[40vh] rounded-lg object-cover"
          />
          <h3 className="mt-2 text-lg font-semibold">{creator.name}</h3>
          <div className="mt-1 flex flex-col items-centre">
            {creator.linkedin && (
              <a
                href={creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            )}
            {creator.github && (
              <a
                href={creator.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                GitHub
              </a>
            )}
            {creator.instagram && (
              <a
                href={creator.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Creators;