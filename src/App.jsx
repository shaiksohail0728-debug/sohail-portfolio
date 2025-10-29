import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" }
  })
};

function Nav() {
  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <ul className="flex gap-4 bg-white/10 backdrop-blur rounded-full px-4 py-2 shadow-md">
        {links.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className="text-sm text-white/90 hover:text-white px-3 py-1">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Nav />
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/photo.jpg"
              alt="Shaik Sohail"
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: "backOut" }}
            />

            <motion.h1
              className="mt-6 text-4xl md:text-5xl font-extrabold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shaik Sohail
            </motion.h1>

            <motion.p
              className="mt-2 text-lg text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Technology Executive | Manufacturing & Process Optimization
            </motion.p>

            <motion.p
              className="mt-1 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Andhra Pradesh, India
            </motion.p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-12 pb-20">
        <motion.section
          id="about"
          className="bg-white rounded-xl shadow-lg p-8 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={sectionVariant}
        >
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a technology executive with expertise in manufacturing and process optimization. I’m passionate
            about leveraging data-driven decision-making and innovation to improve operational efficiency.
          </p>
        </motion.section>

        <motion.section
          id="projects"
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="grid gap-6">
            <motion.article
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              custom={1}
              variants={sectionVariant}
            >
              <h3 className="text-xl font-bold text-accent mb-2">Smart Manufacturing Dashboard</h3>
              <p className="text-gray-700">
                Designed a real-time production monitoring system using IoT sensors and data visualization tools.
              </p>
            </motion.article>

            <motion.article
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              custom={2}
              variants={sectionVariant}
            >
              <h3 className="text-xl font-bold text-accent mb-2">Process Optimization Tool</h3>
              <p className="text-gray-700">
                Built a digital twin model to simulate and optimize plant workflows, reducing cycle time by 15%.
              </p>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="bg-white rounded-xl shadow-lg p-8 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={3}
          variants={sectionVariant}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Leadership", "Lean Manufacturing", "Data Analytics", "Process Automation", "Six Sigma", "Strategic Planning"].map((s, i) => (
              <motion.div
                key={s}
                className="p-3 rounded border border-gray-200 text-center bg-gray-50 hover:bg-gray-100 transition"
                whileHover={{ y: -4 }}
                custom={i + 4}
                variants={sectionVariant}
              >
                {s}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="p-8 text-center rounded-xl bg-gradient-to-r from-accent/10 via-accent/7 to-accent/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={7}
          variants={sectionVariant}
        >
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700 mb-6">I’m always open to discussing new projects or opportunities. Feel free to reach out!</p>
          <a
            href="mailto:shaiksohail@example.com"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </motion.section>
      </main>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Shaik Sohail. All rights reserved.
      </footer>
    </div>
  );
}
