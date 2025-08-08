import profilepic from "../assets/ProfilePic.png";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative bg-gradient-to-b from-[#fdfdfd] to-[#eef2ff] text-[#1f2937] py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
      <div className="max-w-lg space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight font-serif">
          Hey, I'm Brayden
        </h1>
        <p className="text-lg text-[#374151]">
          Passionate about building meaningful things.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-[#6366f1] text-white rounded-full shadow hover:shadow-lg hover:bg-[#818cf8] transition font-medium wiggle-on-hover mt-4"
          style={{ minWidth: "180px", textAlign: "center" }}
        >
          View My Projects
        </a>
      </div>
      <div className="mt-12 md:mt-0 pb-16 md:pb-0">
        <img
          src={profilepic}
          alt="Brayden"
          className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="text-gray-500 hover:text-[#6366f1] transition flex flex-col items-center animate-bounce"
        >
          <FaChevronDown className="text-xl" />
          <span className="text-xs mt-1">Scroll</span>
        </a>
      </div>
    </section>
  );
}