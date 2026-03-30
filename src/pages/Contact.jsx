import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const textareaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [status, setStatus] = useState("");

  //hide the big message after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleTextareaChange = (e) => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_w4u1cyo",
        "template_vzt45gl",
        form.current,
        "5VP0vItCFjyzmAQE3"
      )
      .then(
        (result) => {
          setLoading(false);
          setShowToast(true);
          setStatus("Success! Your message is on its way.");
          form.current.reset();
          if (textareaRef.current) textareaRef.current.style.height = "auto";
        },
        (error) => {
          setLoading(false);
          setStatus("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-slate-900 pt-24 pb-16 text-center overflow-hidden">
      
      {/*Success pop up instead of alert*/}
      <AnimatePresence>
        {showToast && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowToast(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.8, x: "-50%" }}
              style={{ left: "50%", top: "35%" }}
              className="fixed z-50 flex flex-col items-center gap-4 bg-white shadow-2xl p-10 rounded-3xl border border-indigo-50 w-[90%] max-w-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <FaCheckCircle className="text-indigo-600 text-7xl md:text-8xl mb-2" />
              </motion.div>
              
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-600 text-base md:text-lg">
                  Thanks for reaching out, I will get back to you soon :P
                </p>
              </div>

              <button 
                onClick={() => setShowToast(false)}
                className="mt-4 text-slate-400 hover:text-indigo-600 font-medium transition-colors"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-4xl w-full flex flex-col items-center gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 leading-tight mb-4">
            I love turning small curiosities into <span className="text-indigo-600">solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-700">
            Get in touch! Whether you have a project in mind or just want to say hi, my inbox is always open!
          </p>
        </motion.div>
      </div>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 focus:outline-none border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition shadow-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 focus:outline-none border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition shadow-sm"
        />

        <textarea
          ref={textareaRef}
          name="message"
          placeholder="Your Message"
          required
          onChange={handleTextareaChange}
          style={{ minHeight: "120px", overflow: "hidden" }}
          className="px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 focus:outline-none border border-slate-200 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition shadow-sm resize-none"
        ></textarea>

        {/* INLINE STATUS MESSAGE */}
        <AnimatePresence>
          {status && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`text-sm font-medium ${status.includes("Oops") ? "text-red-500" : "text-indigo-600"}`}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          className={`mt-2 px-6 py-3 rounded-full text-lg font-semibold shadow-md transition ${loading
              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:from-indigo-600 hover:to-purple-700"
            }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      <div className="mt-16 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-10 md:gap-16"
        >
          <a href="https://facebook.com/Sardzzzzzz" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-600 hover:scale-110 transition-all duration-300 text-5xl md:text-6xl"><FaFacebook /></a>
          <a href="https://github.com/Sardzzzzz" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-950 hover:scale-110 transition-all duration-300 text-5xl md:text-6xl"><FaGithub /></a>
          <a href="https://linkedin.com/in/kurt-sardes/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-700 hover:scale-110 transition-all duration-300 text-5xl md:text-6xl"><FaLinkedin /></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-600"
        >
          <p>Alternatively, email me at <a href="mailto:18kurt.sardes@gmail.com" className="text-indigo-600 font-medium hover:underline">18kurt.sardes@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
}