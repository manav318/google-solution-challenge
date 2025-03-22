import React from "react";
import { Link } from "react-router-dom";

const Past = () => {
    return (
        <div className="min-h-[1200px] w-[88%] border-0 mx-auto p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-6xl font-serif text-blue-600 mb-24 text-center">
                What Our Community <br /> Has Been Up To.
            </h2>
            <div className="relative min-h-[900px]">
                <div className="w-[3px] h-[760px] bg-black absolute left-[50%] translate-x-[-50%] top-0"></div>
                <div className="text-5xl text-black font-bold absolute left-[50%] translate-x-[-50%] top-16">~</div>
                <div className="text-5xl text-black font-bold absolute left-[50%] translate-x-[-50%] top-80">~</div>
                <div className="text-5xl text-black font-bold absolute left-[50%] translate-x-[-50%] top-[620px]">~</div>
                <div className="w-[40%] absolute top-12 left-[5%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae aliquid labore? Nisi eligendi dolores modi explicabo. Quas totam, nihil ea adipisci optio quia quasi magni cumque! Suscipit at dolore veritatis optio illo dolorum nihil accusantium amet! Natus debitis commodi aut explicabo earum id incidunt libero amet repudiandae, cumque odit?
                </div>
                <div className="w-[40%] absolute top-[280px] right-[5%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae aliquid labore? Nisi eligendi dolores modi explicabo. Quas totam, nihil ea adipisci optio quia quasi magni cumque! Suscipit at dolore veritatis optio illo dolorum nihil accusantium amet! Natus debitis commodi aut explicabo earum id incidunt libero amet repudiandae, cumque odit?
                </div>
                <div className="w-[40%] absolute top-[590px] left-[5%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae aliquid labore? Nisi eligendi dolores modi explicabo. Quas totam, nihil ea adipisci optio quia quasi magni cumque! Suscipit at dolore veritatis optio illo dolorum nihil accusantium amet! Natus debitis commodi aut explicabo earum id incidunt libero amet repudiandae, cumque odit?
                </div>
                <div className="absolute top-0 right-[15%] flex justify-center items-center h-[200px] bg-transparent">
                    {/* Video Container */}
                    <div
                        className="w-[300px] h-[200px] overflow-hidden shadow-2xl"
                        style={{
                            clipPath: "path('M50 0 Q200 50 350 0 Q500 -50 650 0 L650 300 L50 300 Z')"
                        }}
                    >
                        <video className="w-full h-full object-cover" autoPlay loop muted>
                            <source src="videos/camp_vid1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="absolute top-[280px] left-[15%] flex justify-center items-center h-[200px] bg-transparent">
                    {/* Video Container */}
                    <div
                        className="w-[300px] h-[200px] overflow-hidden shadow-2xl"
                        style={{
                            clipPath: "path('M50 50 C150 -30, 250 120, 350 50 C450 -20, 550 150, 650 50 L650 300 L50 300 Z')"
                        }}
                    >
                        <video className="w-full h-full object-cover" autoPlay loop muted>
                            <source src="videos/camp_vid1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="absolute top-[590px] right-[15%] flex justify-center items-center h-[200px] bg-transparent">
                    {/* Video Container */}
                    <div
                        className="w-[300px] h-[200px] overflow-hidden shadow-2xl"
                        style={{
                            clipPath: "path('M50 0 Q200 50 350 0 Q500 -50 650 0 L650 300 L50 300 Z')"
                        }}
                    >
                        <video className="w-full h-full object-cover" autoPlay loop muted>
                            <source src="videos/camp_vid1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <Link
                    to="/dashboard-campaign"
                    className="absolute bottom-1 left-[50%] translate-x-[-50%] flex justify-center items-center text-blue-600 text-xl font-semibold border-0 rounded-full w-52 h-10 shadow-2xl"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    and Many More...
                </Link>
            </div>
        </div>
    );
}

export default Past;