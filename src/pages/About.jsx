import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-white pt-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-3xl text-lg md:text-xl text-gray-300"
      >
        <p>
          I’m Kurt Sardes — a passionate developer who builds sleek, interactive, and modern websites that stand out. I love turning ideas into working digital experiences and constantly learning new tech.
        </p>
        <p className="mt-4">
        </p>
      </motion.div>
    </section>
  );
}
