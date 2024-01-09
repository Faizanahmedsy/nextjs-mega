"use client";

import { cn } from "@/lib/utils";
import { assets } from "@/lib/utils/asset-utils";
import { frameworks } from "@/lib/utils/frameworks";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// opaity-70
// opaity-55

const Home = () => {
  const [currentFramework, setCurrentFramework] = useState(frameworks[0]);
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          }
        )}
      />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradiant background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />

      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      ></div>

      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          {/* Heading */}
          <h1 className={`text-7xl max-w-3xl text-center leading-snug mb-12 `}>
            Hello
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
