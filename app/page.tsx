import React from "react";
import Link from "next/link";
import SocialLinks from "./(pages)/socialinks/page";
import { IconCloudDemo } from "../components/ui/IconCloudDemo";

const HomePage = () => {
  return (
    <main className="relative flex flex-col items-center justify-center text-white mpage animate-fadeIn px-4">
      {/* Social Icons on the Left */}
      <SocialLinks />

      {/* Hero Section */}
      <div className="pageoverlay bg-black py-8 md:py-14 lg:mt-[-50] px-8 md:px-64 bg-opacity-15 z-0 rounded-lg">
        <section className="flex flex-col items-center text-center">
          <div className="icloud relative w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
            <IconCloudDemo />
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-gray-200">
            Hey, It&apos;s <span className="text-emerald-400">Tomer</span>
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-gray-400">
            I&apos;m a{" "}
            <span className="text-emerald-400">Frontend Developer</span>
          </h2>
          <p className="mt-4 max-w-lg text-base md:text-lg text-gray-300 leading-relaxed">
            Web Developer | CSS Lover | Animations <br /> Passionate about
            Innovation, People & Learning new skills
          </p>

          <p className="mt-4 max-w-lg text-base text-gray-300 leading-relaxed quote">
            &quot;Tell me and I forget, teach me and I may remember,
            <br /> involve me and I learn.&quot; <br />
            <span className="bf">- Benjamin Franklin</span>
          </p>

          {/* CTA Button */}
          <div className="wrap flex gap-5">
            <Link href="/about#top">
              <button className="mt-8 px-6 md:px-8 py-2 md:py-3 button button-left">
                About Me
              </button>
            </Link>
            <Link href="/projects#top">
              <button className="mt-8 px-6 md:px-8 py-2 md:py-3 button button-right">
                Projects
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
