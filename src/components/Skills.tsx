import { div } from 'framer-motion/client';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiNextdotjs  } from "react-icons/si";


const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML"},
    { icon: <FaCss3Alt size={140} />, label: "CSS"},
    { icon: <FaReact size={140} />, label: "React"},
    { icon: <FaJsSquare size={140} />, label: "JavaScript"},
    { icon: <FaPython size={140} />, label: "Python"},
    { icon: <SiTypescript size={140} />, label: "Typescript"},
    { icon: <SiMysql size={140} />, label: "MySql"},
    { icon: <SiNextdotjs size={140} />, label: "Next"},
];

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-24'>
            <div className='text-white max-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-white text-6xl font-bold mb-2'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div 
                            key={index}
                            className='h-[200px] w-[220px] flex flex-col justify-between items-center bg-white/20 p-4 rounded-xl'>
                                {skill.icon}
                                <p className='MT-2'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    )
}

export default Skills