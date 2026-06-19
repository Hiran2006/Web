"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { FiSend, FiMail, FiUser, FiInfo, FiMessageSquare } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call latency for the UI
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#030303] text-black dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[25rem] h-[25rem] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
          >
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Let&apos;s Build Something</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                Feel free to reach out to me through this form, or connect with me directly through my social profiles. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Email Glass Card */}
            <div className="glass-panel border border-gray-200/50 dark:border-gray-800/80 bg-white/50 dark:bg-[#07070a]/50 p-6 rounded-3xl shadow-xl flex items-center gap-5 hover:border-emerald-500/20 dark:hover:border-cyan-500/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center text-emerald-500 dark:text-cyan-400 border border-emerald-500/10 dark:border-cyan-500/10 flex-shrink-0">
                <FiMail size={24} />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Email Direct</p>
                <a href="mailto:hirans2006@gmail.com" className="font-bold text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-cyan-400 transition-colors break-words text-sm sm:text-base">
                  hirans2006@gmail.com
                </a>
              </div>
            </div>

            {/* Connect Card */}
            <div className="pt-8 border-t border-gray-200/60 dark:border-gray-900/60">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect on Socials</h3>
              <div className="flex space-x-3.5">
                <Link
                  href="https://github.com/Hiran2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </Link>
                <Link
                  href="http://linkedin.com/in/hirans2006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-3 glass-panel border border-gray-200/60 dark:border-gray-800/80 bg-white/60 dark:bg-[#07070a]/65 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <FiUser size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 dark:bg-[#050508]/60 border border-gray-200/60 dark:border-gray-800/80 text-gray-900 dark:text-white rounded-2xl focus:outline-none focus:border-emerald-500/50 dark:focus:border-cyan-400/50 focus:ring-2 focus:ring-emerald-500/10 dark:focus:ring-cyan-400/10 transition-all font-medium text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Your Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <FiMail size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 dark:bg-[#050508]/60 border border-gray-200/60 dark:border-gray-800/80 text-gray-900 dark:text-white rounded-2xl focus:outline-none focus:border-emerald-500/50 dark:focus:border-cyan-400/50 focus:ring-2 focus:ring-emerald-500/10 dark:focus:ring-cyan-400/10 transition-all font-medium text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <FiInfo size={18} />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 dark:bg-[#050508]/60 border border-gray-200/60 dark:border-gray-800/80 text-gray-900 dark:text-white rounded-2xl focus:outline-none focus:border-emerald-500/50 dark:focus:border-cyan-400/50 focus:ring-2 focus:ring-emerald-500/10 dark:focus:ring-cyan-400/10 transition-all font-medium text-sm sm:text-base"
                    placeholder="Project Inquiry / Say Hello!"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Message</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                    <FiMessageSquare size={18} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 dark:bg-[#050508]/60 border border-gray-200/60 dark:border-gray-800/80 text-gray-900 dark:text-white rounded-2xl focus:outline-none focus:border-emerald-500/50 dark:focus:border-cyan-400/50 focus:ring-2 focus:ring-emerald-500/10 dark:focus:ring-cyan-400/10 transition-all font-medium text-sm sm:text-base resize-none"
                    placeholder="Hi Hiran, I'd love to work on..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2.5 transition-all text-white shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
                  ${submitSuccess 
                    ? 'bg-emerald-600 shadow-emerald-500/10' 
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-cyan-500/5'
                  }`}
                whileHover={{ scale: submitSuccess ? 1 : 1.01 }}
                whileTap={{ scale: submitSuccess ? 1 : 0.99 }}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : submitSuccess ? (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
