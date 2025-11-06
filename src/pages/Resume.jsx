import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-indigo-950 text-white pt-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Resume
      </motion.h2>

      {/*PDF Viewer*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex justify-center items-center w-full"
      >
        <div className="bg-gray-900 rounded-lg shadow-lg p-2 md:p-4">
          <iframe
            src="/Resume1_Sardes,%20Kurt.pdf#zoom=120"
            title="Kurt Sardes Resume"
            className="w-[90vw] md:w-[60vw] h-[90vh] md:h-[85vh] rounded-lg border-none"
          ></iframe>
        </div>
      </motion.div>

      {/*Download Button to download your pdf*/}
      <motion.a
        href="/Resume1_Sardes,%20Kurt.pdf"
        download="Kurt_Sardes_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
      >
        Download Resume
      </motion.a>
    </section>
  );
}
