import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="text-center py-10">
        <img
          src="/photo.jpg"
          alt="Shaik Sohail"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-2 border-secondary"
        />
        <h1 className="text-4xl font-bold text-white mb-2">Shaik Sohail</h1>
        <p className="text-lg text-secondary">
          Technology Executive | Manufacturing & Process Optimization
        </p>
        <p className="text-sm text-gray-400 mt-1">Andhra Pradesh, India</p>
      </header>

      {/* Main */}
      <main className="w-full max-w-4xl p-6 space-y-16">
        {/* About */}
        <section id="about">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a technology executive with expertise in manufacturing and process optimization.
            I’m passionate about leveraging data-driven decision-making and innovation to improve
            operational efficiency.
          </p>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="grid gap-4">
            <div className="card">
              <h3 className="text-xl font-semibold text-secondary">
                Smart Manufacturing Dashboard
              </h3>
              <p className="text-gray-300">
                Designed a real-time production monitoring system using IoT sensors and data visualization tools.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-secondary">
                Process Optimization Tool
              </h3>
              <p className="text-gray-300">
                Built a digital twin model to simulate and optimize plant workflows, reducing cycle time by 15%.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Leadership",
              "Lean Manufacturing",
              "Data Analytics",
              "Process Automation",
              "Six Sigma",
              "Strategic Planning",
            ].map((skill) => (
              <div
                key={skill}
                className="card text-center text-white font-medium hover:text-secondary"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <p className="text-gray-300 mb-4">
            I’m always open to discussing new projects or opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:shaiksohail@example.com"
            className="inline-block bg-secondary text-primary font-semibold px-5 py-2 rounded-md hover:bg-opacity-80 transition"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Shaik Sohail. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
