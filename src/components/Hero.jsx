import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState, useRef } from "react";
import { FaPython, FaJava, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

//Typing effect
const useTyping = (words, typeSpeed = 250, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const charIndex = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex.current < currentWord.length) {
          setDisplayed(currentWord.slice(0, charIndex.current + 1));
          charIndex.current += 1;
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
          return;
        }
      } else {
        if (charIndex.current > 0) {
          setDisplayed(currentWord.slice(0, charIndex.current - 1));
          charIndex.current -= 1;
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    clearTimeout(timeoutRef.current);
    const typingSpeed = isDeleting ? typeSpeed / 2 : typeSpeed;
    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, pause]);

  return displayed;
};

function LanguageCard({ icon, name }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((centerX - x) / centerX) * 6;

    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease-out",
      boxShadow:
        "0 15px 25px rgba(139, 92, 246, 0.5), 0 0 15px rgba(6, 182, 212, 0.6)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s ease-out",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    });
  };

  return (
    <div
      className="rounded-3xl p-[3px] bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#06b6d4]"
      style={{ width: "300px", height: "330px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer bg-gray-900 bg-opacity-40 backdrop-blur-md flex flex-col items-center justify-center text-white rounded-3xl w-full h-full px-6 py-8 shadow-lg"
        style={style}
      >
        <div style={{ fontSize: "128px" }} className="mb-8 drop-shadow-lg">{icon}</div>
        <h4 className="text-4xl font-semibold tracking-wide">{name}</h4>
      </div>
    </div>
  );
}

function ContactCard({ gifSrc }) {
  return (
    <div className="flex justify-center items-center h-full">
      <img
        src="/bowl.gif"
        alt="Partner"
        className="max-w-full h-auto object-contain"
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
}

export default function Hero() {
  const skills = ["Python", "React", "Java", "JavaScript"];
  const typed = useTyping(skills, 250, 2000);

  return (
    <section className="relative bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-white font-inter min-h-screen w-full">
      <ParticlesBackground />


      <div className="max-w-[1800px] mx-auto px-10 sm:px-12 pt-20">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl flex items-center justify-between gap-16">

          <div className="flex-1">
            <h1
              style={{ fontSize: "140px" }}
              className="sm:text-[8.5rem] md:text-[9.5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 leading-[1.05] tracking-tight">
              <span style={{ whiteSpace: "nowrap" }}>Hey, I'm</span>
              <br />
              <span className="text-white">Kurt Sardes!</span>
            </h1>

            <p style={{ fontSize: "56px" }}
              className="sm:text-6xl font-semibold mb-6 mt-6 max-w-xl">
              I do <span>{typed}</span>
            </p>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-xl leading-[1.7]">
              I’m a passionate developer who builds freaky, interactive, and modern websites that stand out.
            </p>
          </div>

          <div
            className="relative rounded-full overflow-hidden flex-shrink-0 ml-50"
            style={{
              width: 700,
              height: 700,
              padding: "8px",
              background:
                "conic-gradient(from 45deg, #8b5cf6, #a855f7, #06b6d4, #8b5cf6)",
            }}>

            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src="/kurt1.png"
                alt="Kurt Sardes"
                className="w-full h-full object-cover rounded-full"
                draggable={false} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-28 max-w-xl">
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">
            Introduction
          </h3>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight">
            Overview
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-[1.7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-120 gap-y-24 justify-start pb-24">
          <LanguageCard icon={<FaPython color="#3776AB" />} name="Python" />
          <LanguageCard icon={<FaJava color="#5382A1" />} name="Java" />
          <LanguageCard icon={<FaJsSquare color="#F0DB4F" />} name="JavaScript" />
          <LanguageCard icon={<FaHtml5 color="#E44D26" />} name="HTML" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.9 }}
        style={{ marginTop: "40px", paddingBottom: "128px" }}
        className="w-full">
        <div className="max-w-[1800px] mx-auto px-10 sm:px-12">

          <div style={{ maxWidth: "1200px", margin: "0" }} className="flex flex-col items-start">

            <div style={{ marginBottom: "48px" }}>
              <h3
                style={{ fontSize: "12px" }}
                className="uppercase tracking-widest font-semibold text-[#8b5cf6] mb-2"
              >
                My Work
              </h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Projects I've Built
              </h2>
            </div>

            {/*Projects*/}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8 items-start justify-between w-full">

              {/* Project Cards*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((project) => ( //4 projects for now
                  <div
                    key={project}
                    className="rounded-3xl p-[3px] bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#06b6d4]"
                  >
                    <div style={{ padding: "24px", minHeight: "380px" }} className="bg-gray-900 bg-opacity-40 backdrop-blur-md rounded-3xl flex flex-col h-full shadow-lg">
                      <div style={{ marginBottom: "16px", height: "140px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }} className="rounded-xl overflow-hidden bg-gray-800">
                        <FaBriefcase color="#8b5cf6" />
                      </div>

                      <h3 style={{ fontSize: "22px" }} className="font-semibold mb-2 text-white">
                        Project Title {project}
                      </h3>

                      <p style={{ fontSize: "16px" }} className="text-gray-300 flex-grow">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>

                      <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
                        <a
                          href="#"
                          style={{ padding: "8px 16px", fontSize: "14px" }}
                          className="border border-indigo-600 hover:border-indigo-500 rounded-md text-indigo-400 hover:text-indigo-300 font-semibold transition"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/*Bowler GIF, named as ContactCard since it was a ContactCard then I changed it*/}
              <div style={{ width: "400px" }} className="lg:sticky lg:top-20 flex justify-center">
                <ContactCard gifSrc="/bowl.gif" />{" "}
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/*Achievements*/}
      <div className="max-w-[1800px] mx-auto px-10 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-10">
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">
            Achievements
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white leading-tight">
            What Have I Done So Far!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center text-white">
            <div>
              <p className="text-6xl font-extrabold text-indigo-400">4+</p>
              <p className="mt-2 text-lg text-gray-300">Projects Completed</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-indigo-400">4</p>
              <p className="mt-2 text-lg text-gray-300">Cisco Badges</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-indigo-400">1</p>
              <p className="mt-2 text-lg text-gray-300">Ongoing Projects</p>
            </div>
          </div>
        </motion.div>

        {/*Road Map*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.1 }}
          className="mt-32 max-w-3xl mx-auto">

          <div className="">
            <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2 text-center sm:text-left">
              Future Plans
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white text-center sm:text-left">
              Road Map
            </h2>

            <ol className="relative border-l border-indigo-600 ml-4 sm:ml-8">
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-black">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </span>
                <h4 className="text-lg font-semibold text-white">Master AI & Machine Learning</h4>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2025</time>
                <p className="text-gray-300">
                  Continue expanding AI & ML skills to build smarter applications and explore advanced algorithms.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-black">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </span>
                <h4 className="text-lg font-semibold text-white">Open Source Contributions</h4>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2026</time>
                <p className="text-gray-300">
                  Actively contribute to open-source projects and create libraries to help the developer community.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-black">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </span>
                <h4 className="text-lg font-semibold text-white">Mobile App Development</h4>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2027</time>
                <p className="text-gray-300">
                  Learn and build mobile applications using React Native and Flutter for cross-platform support.
                </p>
              </li>
            </ol>
          </div>
        </motion.div>

        {/*University Experience*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.4 }}
          className="mt-32 pb-32"
        >
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2 text-center">
            Education
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white text-center">
            University Experience
          </h2>

          <div className="bg-gray-900 bg-opacity-40 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
            <h4 className="text-2xl font-semibold text-white mb-4">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-gray-300 mb-2">University of Example — 2018 to 2022</p>
            <p className="text-gray-300">
              Graduated with honors. Specialized in software engineering, data structures, and artificial intelligence. Participated in coding competitions and student tech clubs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}