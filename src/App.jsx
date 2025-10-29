import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="text-center py-12 bg-gray-800 text-white">
        <img
          src="/photo.jpg"
          alt="Shaik Sohail"
          className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2">Shaik Sohail</h1>
        <p className="text-xl mb-1">Technology Executive | Manufacturing & Process Optimization</p>
        <p className="text-md">Andhra Pradesh, India</p>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a technology executive with expertise in manufacturing and process optimization. I’m passionate about leveraging data-driven decision-making and innovation to improve operational efficiency.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Smart Manufacturing Dashboard</h3>
            <p className="text-gray-700">
              Designed a real-time production monitoring system using IoT sensors and data visualization tools.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Process Optimization Tool</h3>
            <p className="text-gray-700">
              Built a digital twin model to simulate and optimize plant workflows, reducing cycle time by 15%.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Leadership", "Lean Manufacturing", "Data Analytics", "Process Automation", "Six Sigma", "Strategic Planning"].map((skill) => (
            <div key={skill} className="bg-gray-50 border border-gray-200 p-4 rounded text-center font-medium hover:bg-gray-100 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-6">
          I’m always open to discussing new projects or opportunities. Feel free to reach out!
        </p>
        <a
          href="mailto:shaiksohail@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-white">
        © {new Date().getFullYear()} Shaik Sohail. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
