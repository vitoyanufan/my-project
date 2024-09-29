"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/profilepic.png"
import book from "../assets/book.png"
import pc from "../assets/pc.png"
import brain from "../assets/brain.png"
import finance from "../assets/finance.png"
import { GiD10 } from "react-icons/gi";

const About = () => {
    return (
        <div className="bg-black max-w-auto mx-auto" id="about">

            <h1 className="text-center text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
                About <span className="text-orange-400">Me</span></h1>

            <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

                <div className="hover:bg-white hover:bg-opacity-80 hover:text-black transition duration-300 ease-in-out w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6 h-full"> 
                        <Image src={book} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-black">Education and Courses</h2>
                            <p className="text-lg text-black mt-2">RevoU Bootcamp (Full-stack Web Developer), Feb to Aug 2024</p>
                            <p className="text-lg text-black mt-2">University of Diponegoro (International Relations), Aug 2011 to Dec 2016</p>
                        </div>
                    </div>  
                </div>

                <div className="hover:bg-white hover:bg-opacity-80 hover:text-black transition duration-300 ease-in-out w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6 h-full"> 
                        <Image src={brain} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-black">Soft Skills</h2>
                            <p className="text-lg text-black mt-2">Speaking/ Communication, Problem Solving, Negotiation, Adaptability</p>
                        </div>
                    </div>  
                </div>

                <div className="hover:bg-white hover:bg-opacity-80 hover:text-black transition duration-300 ease-in-out w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6 h-full"> 
                        <Image src={pc} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-black">Technical Skill</h2>
                            <p className="text-lg text-black mt-2">JavaScript, TypeScript, React/Next.js, Python, Flask Alchemy, Ms Excel VBA</p>
                        </div>
                    </div>  
                </div>


                <div className="hover:bg-white hover:bg-opacity-80 hover:text-black transition duration-300 ease-in-out w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6"> 
                        <Image src={finance} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-black">Work Experience</h2>
                            <p className="text-lg text-black mt-2">Account Representative, BPJS Ketenagakerjaan, Dec 2018 – Present</p>
                            <p className="text-lg text-black mt-2">Business Analyst, Indofood Timor Leste (Dili), Aug 2017 – Dec 2017</p>
                        </div>
                    </div>  
                </div>


            </div>
        </div>
    )
}

export default About