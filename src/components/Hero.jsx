import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState, useRef } from "react";
import { FaPython, FaJsSquare, FaGithub, FaCertificate, FaDatabase } from "react-icons/fa";
import { IoBuildOutline } from "react-icons/io5";

//Image import
import firenoteImg from "../assets/fromthepen.png";
import firenoteImg2 from "../assets/indutest2.png";
import firenoteImg3 from "../assets/dali.png";
import firenoteImg4 from "../assets/atf1.png";

//Project data array
const projectsData = [
  {
    title: "SmartTarget : Context-aware Advertising Using Camera Sensors in Clothing Stores Using Faster R-CNN and SVM",
    description: "I am the Backend developer for SmartTarget who implemented Faster R-CNN and SVM algorithms, developed most of the core backend-side in Python, and trained the models to enable real-time object detection and classification through camera sensors. SmartTarget, a tunnel-hosted, camera-based advertising system designed for clothing retail environments. The system employed the Faster Region-Based Convolutional Neural Network (Faster R-CNN), a deep learning model for object detection, in conjunction with Haar-Cascades for real-time face and person detection. Additionally, a Support Vector Machine (SVM) was utilized to analyze facial features and classify demographic attributes such as age, gender, and skin tone. SmartTarget delivered demographic-based advertisements tailored to individual customers while maintaining a display window for randomized advertisements to ensure inclusivity and general appeal.",
    image: firenoteImg2,
    github: "https://github.com/Sardzzzzz/thesis-project",
    techStack: "Python, PostgreSQL, AWS, JavaScript",
  },
  {
    title: "DALI: Inventory App (Unofficial)",
    description: "I handled the project’s development, including the backend logic, and was estimated to take approximately 53.8 days through rigorous PERT analysis. I am the one who connected and created the SupaBase database allowing for authentication, data storage, and implemented role-based access. I am responsible for the addition of core functionalities (CRUD) through TypeScript. The DALI Inventory Web Application is a full-stack inventory system. The platform features a role-based access system managed via Supabase Auth, serving various users such as Admins, Warehouse Staff, and Customers. Its architecture is built on a three-layer system utilizing AWS Elastic Beanstalk, EC2, and GitHub for continuous integration, with a backend powered by Supabase.",
    image: firenoteImg3,
    github: "https://github.com/GuilianiHatsu1k1314/apsi_inventory_app",
    techStack: "TypeScript, SupaBase, AWS",
  },
  {
    title: "FromThePen",
    description: "FromThePen is a Note-Taking Application that integrates Firebase services to manage user authentication, notes, and folders. It allows our users to create, edit, and manage notes and organize them within folders! Additionally, users can upload images to notes, manage their profile with profile pictures, and securely handle their accounts. I developed most of the backend core functionalities through Flutter and Dart and integrated Firebase into the Flutter application to enable seamless data storage and synchronization across devices.",
    image: firenoteImg,
    github: "https://github.com/kevinzekee/notes-app",
    techStack: "Dart, FireBase",
  },
  {
    title: "MealyMachine",
    description: "A collaborative, just for fun, retro-styled grid-based strategy game inspired by finite-state machines. Players navigate a reactive environment where every move triggers state changes, with a cross-platform UI built with Dart.",
    image: firenoteImg4,
    github: "https://github.com/kevinzekee/ATF_GridGame",
    techStack: "Dart",
  }
];

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl p-[3px] bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#06b6d4] h-full w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-3xl p-6 flex flex-col h-full shadow-2xl border border-white/5 text-left">
        
        <div className="relative group overflow-hidden rounded-2xl bg-gray-100 mb-6 h-64 flex items-center justify-center">
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-950 mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm mb-4 flex-grow">
            {project.description}
          </p>

          <div className="mt-auto">
            <p className="text-indigo-700 font-mono text-xs mb-6 uppercase tracking-wider">
              {project.techStack}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border border-white/10"
            >
              <FaGithub className="text-lg" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const useTyping = (words, typeSpeed = 150, pause = 2000) => {
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

function SkillCard({ icon, name }) {
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
      boxShadow: "0 15px 25px rgba(139, 92, 246, 0.3), 0 0 15px rgba(6, 182, 212, 0.4)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s ease-out",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    });
  };

  return (
    <div className="rounded-3xl p-[3px] bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#06b6d4] mx-auto" style={{ width: "300px", height: "330px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer bg-white backdrop-blur-md flex flex-col items-center justify-center text-gray-950 rounded-3xl w-full h-full px-6 py-8 shadow-lg"
        style={style}
      >
        <div style={{ fontSize: "110px" }} className="mb-8 drop-shadow-lg text-gray-900">{icon}</div>
        <h4 className="text-4xl font-semibold tracking-wide text-center">{name}</h4>
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
  const skillsList = [
    "Python", "JavaScript", "DBMS", "Helpdesk"
  ];
  const typed = useTyping(skillsList, 150, 2000);

  return (
    <section className="relative bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-white font-inter min-h-screen w-full overflow-hidden">
      <ParticlesBackground />

      <div className="max-w-[1800px] mx-auto px-10 sm:px-12 pt-20">

        {/*Hero*/}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[1600px] flex flex-col lg:flex-row items-center gap-20 overflow-visible">

          <div className="flex-1 text-left">
            <h1
              style={{ fontSize: "clamp(3.5rem, 10vw, 140px)" }}
              className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 leading-[1.05] tracking-tight">
              <span style={{ whiteSpace: "nowrap" }}>Hey, I'm</span>
              <br />
              <span className="text-white">Kurt Sardes!</span>
            </h1>

            <p style={{ fontSize: "clamp(1.5rem, 5vw, 56px)" }}
              className="font-semibold mb-6 mt-6 max-w-xl h-24">
              I do <span>{typed}</span>
            </p>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-xl leading-[1.7]">
              I’m just a guy who likes figuring out how things work.
            </p>
          </div>

          <div
            className="relative rounded-full overflow-hidden flex-shrink-0 hidden lg:block"
            style={{
              width: "min(500px, 30vw)",
              aspectRatio: "1/1",
              padding: "8px",
              background: "conic-gradient(from 45deg, #8b5cf6, #a855f7, #06b6d4, #8b5cf6)",
            }}>

            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src="/kurtsss.png"
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
            I am a Computer Science student at Holy Angel University with a solid foundation in backend development and a growing expertise in the IT field. 
            I have strong familiarity with programming languages like Python and Java, and experience in managing databases such as PostGreSQL, Firebase, and Supabase. 
            I have recently discovered a dual passion for both building applications and the practical hardware and software systems that keep them running. 
            I apply an analytical and methodological approach to troubleshooting, with solid hands-on experience in hardware, software, and network diagnostics. 
            As a collaborative team player, I am very willing to further improve my skill-set and leverage my problem-solving and technical versatility to excel in either an IT role or a Web Developer role while maintaining standards.
          </p>
        </motion.div>
        
        {/* Grid for Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-40 justify-start pb-24"
        >
          <SkillCard icon={<FaPython color="#3776AB" />} name="Python" />
          <SkillCard icon={<FaJsSquare color="#F0DB4F" />} name="JavaScript" />
          <SkillCard icon={<FaDatabase color="#336791" />} name="DBMS" />
          <SkillCard icon={<IoBuildOutline className="text-indigo-400" />} name="Helpdesk" />
        </motion.div>

        {/*Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 max-w-[1300px] mx-auto text-center"
        >
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">
            Credentials
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">
            Professional Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "CyberThreat Management - Cisco 2024",
              "CCNA - Introduction to Network - Cisco 2024",
              "JavaScript Essentials 1 - Cisco 2025",
              "English for IT 1 - Cisco 2025",
              "Scientific Computing with Python - freeCodeCamp 2026",
              "Responsive Web Design - freeCodeCamp 2026",
              "Data Analytics Essentials 1 - Cisco 2026",
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-xl hover:border-[#8b5cf6] border border-transparent transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] p-2 rounded-lg">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <span className="text-gray-950 font-medium text-sm sm:text-base">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*Projects Section*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-32 text-center"
        >
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">My Work</h3>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Projects I've Built</h2>

          <div className="flex flex-col items-center gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            
            <div className="mt-8">
              <ContactCard gifSrc="/bowl.gif" />
            </div>
          </div>
        </motion.div>

        {/*Achievements Section*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-32 text-center">
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">
            Achievements
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white leading-tight">
            What Have I Done So Far!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-white max-w-4xl mx-auto">
            <div>
              <p className="text-6xl font-extrabold text-indigo-400">4</p>
              <p className="mt-2 text-lg text-gray-300">Projects Completed</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-indigo-400">7</p>
              <p className="mt-2 text-lg text-gray-300">IT Related Certificates</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-indigo-400">1</p>
              <p className="mt-2 text-lg text-gray-300">Ongoing Project</p>
            </div>
          </div>
        </motion.div>

        {/*Road Map*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-32 max-w-3xl mx-auto text-center">
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">
            Future Plans
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">
            Road Map
          </h2>

          <ol className="relative border-l border-indigo-600 ml-4 sm:mx-auto inline-block text-left">
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-black">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </span>
              <h4 className="text-lg font-semibold text-white">Junior IT Support / Entry Level Back-end Developer</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2026</time>
              <p className="text-gray-300 max-w-lg">I'm starting this year by taking everything I learned during my OJT, the hardware swaps, the troubleshooting, and the setup routines, and turning it into a professional foundation. As I finish my degree at Holy Angel University, I’m moving away from just "fixing" broken things to actually "managing" a stable environment. My goal is to use my programming background to automate the repetitive parts of the helpdesk, like software installs or system maintenance. By the end of the year, I want to be in either a Junior IT Support role or a Back-end developer role.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-black">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </span>
              <h4 className="text-lg font-semibold text-white">Junior NOC Engineer / Back-end Developer</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2027</time>
              <p className="text-gray-300 max-w-lg">In 2027, my focus is to back up my experience with network diagnostics and connectivity, I’m dedicated to acquiring more Cisco badges to further solidify both my programming and networking background. I’m also stepping into the cloud by pursuing Azure certifications, shifting my mindset from local servers to global infrastructure. Because I have a developer background, I’m also looking for Dev-focused certificates to bridge the gap between code and hardware. I’m not just looking at routers and switches anymore, I’m looking at a hybrid world where the network is a system I can script, secure, and optimize.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-black">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </span>
              <h4 className="text-lg font-semibold text-white">COMING SOON!</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2028</time>
              <p className="text-gray-300">COMING SOON!</p>
            </li>
          </ol>
        </motion.div>

        {/*University / OJT Experience*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-32 pb-32 text-center"
        >
          <h3 className="uppercase tracking-widest font-semibold text-[#8b5cf6] text-xs mb-2">
            Background
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">
            University and OJT Experience
          </h2>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto text-left">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-950 mb-4 text-center sm:text-left">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-gray-800 mb-2 font-semibold text-center sm:text-left">HOLY ANGEL UNIVERSITY</p>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <span className="text-[#8b5cf6] font-bold">Achievements:</span> Dean’s List 2022-2025
                </p>
                <p className="text-gray-700 leading-relaxed italic">
                  <span className="text-[#8b5cf6] font-bold not-italic">Thesis:</span> SmartTarget: Context-aware Advertising Using Camera Sensors in Clothing Stores Using Faster R-CNN and SVM.
                </p>
                <p className="text-gray-700 leading-relaxed">Focused on Backend Development and DBMS. Gained extensive experience in architecting scalable server-side logic and managing complex data environments.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-950 mb-4 text-center sm:text-left">
                IT Support Intern (OJT)
              </h4>
              <p className="text-gray-800 mb-4 font-semibold uppercase tracking-wide text-center sm:text-left"><span className="text-[#8b5cf6] font-bold">CLARK OUTSOURCING</span></p>
              <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Handled PC maintenance and hardware component upgrades for NUC systems.</li>
                <li>Performed advanced troubleshooting for Microsoft 365 applications.</li>
                <li>Assisted in employee onboarding and technical setups for new hires.</li>
                <li>Applied methodological approaches to diagnose and resolve network issues.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}