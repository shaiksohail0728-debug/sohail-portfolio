import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="text-center py-10 bg-white shadow-md relative overflow-hidden">
        {/* Profile Image */}
        <img
          src="/photo.jpg" // ✅ make sure photo.jpg is in public/
          alt="Shaik Sohail"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-500"
        />
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">Shaik Sohail</h1>
        <p className="text-lg text-gray-600">
          Technology Executive | Manufacturing & Process Optimization
        </p>
        <p className="text-sm text-gray-500">Andhra Pradesh, India</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* About Section */}
        <section id="about">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a technology executive with expertise in manufacturing and process optimization. 
            I’m passionate about leveraging data-driven decision-making and innovation to improve 
            operational efficiency.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
          <ul className="space-y-3">
            <li className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg text-blue-700">Smart Manufacturing Dashboard</h3>
              <p className="text-gray-700">
                Designed a real-time production monitoring system using IoT sensors and data visualization tools.
              </p>
            </li>
            <li className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg text-blue-700">Process Optimization Tool</h3>
              <p className="text-gray-700">
                Built a digital twin model to simulate and optimize plant workflows, reducing cycle time by 15%.
              </p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Leadership",
              "Lean Manufacturing",
              "Data Analytics",
              "Process Automation",
              "Six Sigma",
              "Strategic Planning",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-white shadow p-3 rounded text-center hover:bg-blue-50 transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact</h2>
          <p className="text-gray-700 mb-4">
            I’m always open to discussing new projects or opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:shaiksohail@example.com"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white mt-12 shadow-inner">
        © {new Date().getFullYear()} Shaik Sohail. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
