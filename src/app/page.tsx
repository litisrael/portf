'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import AnimatedName from "@/components/LetterAnimation";
import { TypeAnimation } from "react-type-animation";
import WavyText from "@/components/WavyText";
import { FaceIcon, HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import { Divide, Heart } from 'lucide-react';
import { CanvasAnimation } from "@/components/canva";
import { SideBox } from "@/components/side";

export default function Home() {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypeAnimation(true);
    }, 4000); // 4000 ms = 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {/* <div className='w-1/5 float-right'>
      <p>juju </p>
    </div> */}
    <SideBox items={
       <CanvasAnimation/>}/>
    <div className=' flex flex-col  items-center   md:flex-row justify-around   '> 

  
    <div className="  text-center p-4 w-4/5 h-80  md: w-2/5  "  >  
      <h1 className="text-5xl font-bold from-purple-500 via-slate-300  to-blue-700 bg-gradient-to-r bg-clip-text text-transparent">
        Hello, I'm 
      </h1>
      <div className="text-5xl font-bold from-purple-500  via-slate-300 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">
        <WavyText text="Israel Litvack" replay={true} />
   
      </div>
      
      {showTypeAnimation && (
          <div className="text-5xl font-bold flex flex-col items-center ">
          <div className="flex items-center">
            <span>I</span>
            <Heart className="mx-2 text-red-500  " size={60} />
          </div>
          <TypeAnimation
            sequence={[
              "JavaScript",
              1000,
              "Postgres",
              1000,
              "Next.JS",
              1000,
              "React",
              1000,
              "GIT",
              1000,
              "Sequelize",
              1000,
              "VSC",
              1000,
              "ZOD",
              1000,
              "my daughters",
              1000,
              "my bIke",
              1000,

            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      )}
    </div>
    <div
    className="w-2/5 sm:w-64 md:w-96 lg:w-120 h-64 md:h-96 lg:h-120 rounded-lg" >


    {/* <CanvasAnimation /> */}
    </div>
    </div>
    </>

  );
}
