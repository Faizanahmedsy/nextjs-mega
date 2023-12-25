import { assets } from "@/lib/utils/asset-utils";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main>
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradiant background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />
    </main>
  );
};

export default Home;
