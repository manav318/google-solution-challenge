import React from "react";
import { FaArrowRight } from "react-icons/fa";
const CreateCamp = () => {
    return (  
        <div className="w-screen h-[500px] relative p-4 mt-10">
            <div className="absolute text-6xl font-semibold text-blue-800 top-10 left-36">
            <h1 className="text-5xl font-bold text-black uppercase">Create</h1>
            <h2 className="text-6xl font-bold text-blue-600 uppercase">Campaign</h2>
            </div>
            <div className=" absolute w-[620px] font-playfair text-lg top-44 left-36">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis fugit, neque iste, harum veritatis aperiam cum, omnis corrupti ipsum minus consequatur voluptatum possimus? Magni consequatur possimus cumque sint. Numquam aspernatur nesciunt sunt maiores veniam reprehenderit, quasi nulla asperiores possimus, accusamus amet consequatur doloremque deleniti, commodi laboriosam doloribus quidem quaerat.
            </div>
            <div className="absolute top-3 right-24">
                <img src="/pics/createCamp.png" alt="" />
            </div>
            <div className="w-56 h-12 cursor-pointer bg-blue-600 text-white font-semibold text-2xl flex items-center justify-center gap-2 rounded-md absolute bottom-16 left-44 shadow-2xl">
                Create <FaArrowRight className="text-3xl" />
            </div>

        </div>
    );
}
 
export default CreateCamp;