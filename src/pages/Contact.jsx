import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const textareaRef = useRef(null);
  const [loading, setLoading] = useState(false);

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

    const currentTime = new Date().toLocaleString();
    const formData = new FormData(form.current);
    formData.append("time", currentTime);

    emailjs
      .sendForm(
        "service_w4u1cyo",
        "template_vzt45gl",
        form.current,
        "5VP0vItCFjyzmAQE3"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
          if (textareaRef.current) textareaRef.current.style.height = "auto";
          setLoading(false);
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-slate-900 pt-24 pb-16 text-center">
      
      {/*New Headline, for merging :P*/}
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
            Get in touch! :P. Whether you have a project in mind or just want to say hi, my inbox is always open!
          </p>
        </motion.div>
      </div>

      {/*Form for messages. */}
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

        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          className={`mt-4 px-6 py-3 rounded-full text-lg font-semibold shadow-md transition ${loading
              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:from-indigo-600 hover:to-purple-700"
            }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {/*Icons and hyperlinks*/}
      <div className="mt-16 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-10 md:gap-16"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-600"
        >
          <p>
            Alternatively, email me at 
            {" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=18kurt.sardes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              18kurt.sardes@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}