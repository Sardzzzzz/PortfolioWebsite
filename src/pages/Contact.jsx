import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

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
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-black text-white pt-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Get In Touch :P
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8"
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
          className="px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
        ></textarea>
        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          className={`mt-4 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition ${loading
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl"
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
        className="mt-12 text-gray-500"
      >
        <p>
          Alternatively, you can email me at
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=18kurt.sardes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            18kurt.sardes@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
