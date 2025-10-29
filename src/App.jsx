import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="text-center py-10 bg-white shadow-md">
        <h1 className="text-4xl font-bold mb-2">Shaik Sohail</h1>
        <p className="text-lg text-gray-600">
          Technology Executive | Manufacturing & Process Optimization
        </p>
        <p className="text-sm text-gray-500">Andhra Pradesh, India</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        {/* About Section */}
        <section id="about">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a technology executive with expertise in manufacturing and process
            optimization. I’m passionate about leveraging data-driven decision-making
            and innovation to improve operational efficiency.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-3">
            <li className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="font-bold text-lg">Smart Manufacturing Dashboard</h3>
              <p className="text-gray-700">
                Designed a real-time production monitoring system using IoT sensors
                and data visualization tools.
              </p>
            </li>
            <li className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="font-bold text-lg">Process Optimization Tool</h3>
              <p className="text-gray-700">
                Built a digital twin model to simulate and optimize plant workflows,
                reducing cycle time by 15%.
              </p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <li className="bg-white shadow p-3 rounded text-center">Leadership</li>
            <li className="bg-white shadow p-3 rounded text-center">Lean Manufacturing</li>
            <li className="bg-white shadow p-3 rounded text-center">Data Analytics</li>
            <li className="bg-white shadow p-3 rounded text-center">Process Automation</li>
            <li className="bg-white shadow p-3 rounded text-center">Six Sigma</li>
            <li className="bg-white shadow p-3 rounded text-center">Strategic Planning</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            I’m always open to discussing new projects or opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:shaiksohail@example.com"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
