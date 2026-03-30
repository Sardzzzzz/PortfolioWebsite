import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaTimes, FaRegWindowMaximize, FaMinus } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-indigo-50 min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-20 relative">
        
        {/*Header*/}
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] text-white uppercase bg-indigo-600 rounded-sm shadow-xl shadow-indigo-200"
          >
            Credentials
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Resume</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
            Look at my background, certifications, or just me.
          </p>
        </div>

        {/*Content Container*/}
        <div className="flex flex-col xl:flex-row items-stretch justify-between gap-12 relative z-10">
          
          {/*Windows Style PDF Viewer Card*/}
          <div className="w-full xl:w-[70%] flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-5xl bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 flex flex-col group overflow-hidden"
            >
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-2">
                <div className="flex items-center gap-3">
                  <FaFileAlt className="text-indigo-600 text-xs" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    Resume_KurtSardes.pdf - Adobe Acrobat
                  </span>
                </div>
                
                <div className="flex items-center">
                  <div className="px-4 py-2 hover:bg-slate-200 transition-colors cursor-pointer">
                    <FaMinus className="text-[10px] text-slate-600" />
                  </div>
                  <div className="px-4 py-2 hover:bg-slate-200 transition-colors cursor-pointer">
                    <FaRegWindowMaximize className="text-[10px] text-slate-600" />
                  </div>
                  <div className="px-4 py-2 hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
                    <FaTimes className="text-[12px] text-slate-600" />
                  </div>
                </div>
              </div>

              {/*PDF Wrapper*/}
              <div className="w-full bg-slate-800">
                <iframe
                  src="/Resume_KurtSardesLatest.pdf#view=FitH"
                  title="Kurt Sardes Resume"
                  className="w-full h-[600px] md:h-[850px] lg:h-[950px] border-none"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/*Sidebar with Character*/}
          <div className="w-full xl:w-[28%] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-xl shadow-2xl shadow-indigo-100/50 flex flex-col items-center xl:items-start"
            >
              <div className="relative w-full max-w-[280px] mb-8">
                <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl"></div>
                <img 
                  src="/tetsu.gif" 
                  alt="Pointing at Resume" 
                  className="w-full h-auto object-contain pointer-events-none relative z-10 scale-110" 
                />
              </div>

              <div className="space-y-2 text-center xl:text-left mb-8 w-full font-sans">
                <h4 className="text-slate-900 font-black text-xl tracking-tight">Do you need my PDF?</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  Save one of my copies right now. No charges, trust me.
                </p>
              </div>

              <motion.a
                href="/Resume_KurtSardesLatest.pdf"
                download="Kurt_Sardes_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-black uppercase tracking-[0.2em] shadow-lg transition-all"
              >
                <FaDownload className="text-lg group-hover:animate-bounce" />
                Download PDF
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/*Footer*/}
        <div className="mt-10 pt-16 border-t border-slate-200/60 text-center pb-12 relative z-10">
          <p className="text-2xl font-black text-slate-900 tracking-tighter">Always ready to collaborate, anytime, anywhere.</p>
          <a href="mailto:18kurt.sardes@gmail.com" className="mt-4 inline-block text-indigo-600 font-bold hover:underline tracking-tight">
            18kurt.sardes@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}