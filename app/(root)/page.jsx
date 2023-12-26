"use client";

import { cn } from "@/lib/utils";
import { assets } from "@/lib/utils/asset-utils";
import Image from "next/image";
import React from "react";

// opaity-70
// opaity-55

const Home = () => {
  const [showBackground, setShowBackground] = React.useState(false);

  React.useEffect(() => {
    // setTimeout(() => {
    //   setShowBackground(true);
    // }, 1000);
    setShowBackground(true);
  }, []);

  return (
    <main>
      <div className="fixed inset-0 bg-blue-200 transition-colors delay-100 duration-700 opacity-25 "></div>
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradiant background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      <div
        className="fixed inset-0 opacity-55"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />

      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      ></div>
    </main>
  );
};

export default Home;
