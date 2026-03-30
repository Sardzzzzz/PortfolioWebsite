import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const textareaRef = useRef(null); // Ref for the auto-expanding textarea
  const [loading, setLoading] = useState(false);

  // Function to handle auto-expansion
  const handleTextareaChange = (e) => {
    const element = textareaRef.current;
    if (element) {
      // Reset height to calculate scrollHeight correctly
      element.style.height = "auto";
      // Set height to scrollHeight (content height)
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
          // Reset textarea height after sending
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
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-slate-900 pt-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-slate-950"
      >
        Get In Touch :P
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-2xl text-lg md:text-xl text-slate-700 mb-8"
      >
        Have a project in mind that we can work on together ;) or just wanted to say hi? My inbox is always open.
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
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
        
        {/* UPDATED TEXTAREA: Added ref, onChange, and removed fixed rows */}
        <textarea
          ref={textareaRef}
          name="message"
          placeholder="Your Message"
          required
          onChange={handleTextareaChange}
          style={{ minHeight: "120px", overflow: "hidden" }} // Prevents initial tiny box and scrollbars
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
          {loading ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
            >
              Sending...
            </motion.span>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 text-slate-600 pb-12"
      >
        <p>
          Alternatively, you can email me at
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
    </section>
  );
}