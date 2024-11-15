"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialLinks from "../socialinks/page";
import ClientOnly from "../../../components/ClientsOnly";

const AboutMe = () => {
  const [animationState, setAnimationState] = useState({
    displayText: "",
    showButton: false,
  });

  const fullText = `Hey guys! My name is Tomer, and I am a Frontend Developer.
    I recently finished an intensive and fulfilling Fullstack Bootcamp.
    I fell in love with the frontend, and it became my passion.
    My journey into programming was long and challenging,
    I always wanted it but never had the time to pursue it.
    This time, I'm not giving up and challenging myself every day with something new.
    So, if you want to work with me, or just want to say hi, feel free to contact me!`;

  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout | null = null;

    const typeText = () => {
      if (index < fullText.length) {
        setAnimationState((prev) => ({
          ...prev,
          displayText: fullText.slice(0, index + 1),
        }));
        index++;
        timeoutId = setTimeout(typeText, 30);
      } else {
        setAnimationState((prev) => ({ ...prev, showButton: true }));
      }
    };

    timeoutId = setTimeout(typeText, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ClientOnly>
      <div className="aboutme flex flex-col items-center bg-black bg-opacity-25 text-center text-white py-10 px-4 rounded-lg max-w-4xl mx-auto">
        <SocialLinks />

        <h1 className="text-5xl font-bold mb-8 text-emerald-400">
          A Little Bit About Me
        </h1>

        <p className="text-3xl max-w-3xl text-gray-300">
          {animationState.displayText}
        </p>

        {animationState.showButton && (
          <Link href="/contact">
            <button onClick={scrollToTop} className="button mt-8 px-8 py-3">
              Let&apos;s Chat!
            </button>
          </Link>
        )}
      </div>
    </ClientOnly>
  );
};

export default AboutMe;
