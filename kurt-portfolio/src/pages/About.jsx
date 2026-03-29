import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-slate-900 pt-16">
      
      <div className="max-w-4xl w-full flex flex-col items-center gap-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 leading-tight">
            I love turning small curiosities <br className="hidden md:block" /> 
            into <span className="text-indigo-600">solutions.</span>
          </h2>
        </motion.div>

        {/*Logos and socials*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-12 md:gap-20"
        >
          <a 
            href="https://www.facebook.com/Sardzzzzzz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-600 hover:scale-110 transition-all duration-300 text-5xl md:text-6xl"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://github.com/Sardzzzzz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-slate-950 hover:scale-110 transition-all duration-300 text-5xl md:text-6xl"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/kurt-sardes/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-700 hover:scale-110 transition-all duration-300 text-5xl md:text-6xl"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-slate-500 font-mono text-sm tracking-widest uppercase mt-10"
        >
          Let's connect!
        </motion.p>
      </div>

    </section>
  );
}