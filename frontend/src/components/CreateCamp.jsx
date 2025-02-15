import React from "react";

const CreateCamp = () => {
    return (  
        <div className="w-screen h-[500px] relative p-4 mt-10">
            <div className="absolute text-6xl font-semibold text-blue-800 top-10 left-36">
                Create <br />
                Campaign
            </div>
            <div className=" absolute w-[600px] font-serif text-lg top-44 left-36">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis fugit, neque iste, harum veritatis aperiam cum, omnis corrupti ipsum minus consequatur voluptatum possimus? Magni consequatur possimus cumque sint. Numquam aspernatur nesciunt sunt maiores veniam reprehenderit, quasi nulla asperiores possimus, accusamus amet consequatur doloremque deleniti, commodi laboriosam doloribus quidem quaerat.
            </div>
            <div className="absolute top-3 right-24">
                <img src="/pics/createCamp.png" alt="" />
            </div>
            <div className="w-36 h-12 cursor-pointer bg-blue-600  text-white font-semibold text-4xl text-center rounded-md absolute bottom-16 left-44 shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                create
            </div>
        </div>
    );
}
 
export default CreateCamp;