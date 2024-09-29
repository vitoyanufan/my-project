"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {    
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2b1942_35%,#8f4c55_60%,#DBAF6E_80%)]" id="hero">
            <div
                className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[500px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_90%,#2B1942)]"
            >

                <div className="text-6xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi, my name is </h1>
                    <h1 className="text-[#E48A57]">Vito Yanufan Ardi</h1>
                    </div>

                    <motion.div className="hidden md:block absolute left-[280px] top-[170px]" drag>
                    <Image
                        src={cursor}
                        height="170"
                        width="170"
                        alt="cursor"
                        className=""
                        draggable="false"
                    />
                    </motion.div>

                    <motion.div className="absolute right-[220px] top-20px]" drag>
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt="message"
                        className=""
                        draggable="false"
                    />
                    </motion.div>
                </div>

                <p className="text-center text-x1 max-w-[500px] mx-auto mt-8 text-white/80">
                "I am a passionate beginner full-stack web developer with a strong foundation in HTML, CSS, JavaScript, TypeScript, React, Next.js, Python, Flask, Alchemy, and MySQL. Currently honing my skills through hands-on projects and eager to contribute to impactful web development projects. I am driven by curiosity and a commitment to continuous learning in the field of technology."
                </p>

                <Image
                    src={profilepic}
                    alt="profile picture"
                    className="h-auto w-auto mx-auto"
                />
    
            </div>
            
    );
    };

export default Hero;
