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

      <section className="first-section">
        <div>
          <div className="waviy">
            <span style={{ "--i": 1 }}> F </span>
            <span style={{ "--i": 2 }}> a </span>
            <span style={{ "--i": 3 }}> i </span>
            <span style={{ "--i": 4 }}> z </span>
            <span style={{ "--i": 5 }}> a </span>
            <span style={{ "--i": 6 }}> n </span>
            <span style={{ "--i": 7 }}> a </span>
            <span style={{ "--i": 8 }}> h </span>
            <span style={{ "--i": 9 }}> m </span>
            <span style={{ "--i": 10 }}> e </span>
            <span style={{ "--i": 11 }}> d </span>
          </div>

          <div className="_container">
            <p
              style={{
                marginTop: "0",
              }}
            >
              I'm
            </p>

            <section className="_animation">
              <div className="_first">
                <div>Frontend Dev</div>
              </div>
              <div className="_second">
                <div>Cs Sophomore</div>
              </div>
              <div className="_third">
                <div>Tech enthusiast</div>
              </div>
            </section>
          </div>
        </div>

        <p
          style={{
            position: "absolute",
            bottom: "90px",
            fontFamily: " 'lexend', sans-serif ",
            fontSize: "1rem",
          }}
        >
          React is my 🍞 and 🧈
        </p>
      </section>
    </main>
  );
};

export default Home;
