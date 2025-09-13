"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const features = [
    {
      title: "Task Management",
      description: (
        <div className="space-y-2">
          <div>Easily create, organize, and prioritize tasks to boost productivity.</div>
          <ul className="mt-2 list-disc list-inside text-white/90">
            <li>Drag-and-drop task organization</li>
            <li>Real-time sync across devices</li>
            <li>Customizable task categories & priorities</li>
          </ul>
        </div>
      ),
      icon: <AcademicCapIcon className="w-4 h-4 text-yellow-200 mb-3" />,
      gradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
      buttonLabel: "Learn More",
    },
    {
      title: "Modern Tech Stack",
      description: (
        <div className="space-y-2">
          <div>Built with cutting-edge technologies for speed and maintainability.</div>
          <ul className="mt-2 list-disc list-inside text-white/90">
            <li>Next.js App Router for scalable architecture</li>
            <li>Tailwind CSS for polished UI</li>
            <li>React Hooks & modular components</li>
          </ul>
        </div>
      ),
      icon: <CodeBracketIcon className="w-4 h-4 text-cyan-200 mb-3" />,
      gradient: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600",
      buttonLabel: "Learn More",
    },
    {
      title: "Interactive Dashboard",
      description: (
        <div className="space-y-2">
          <div>Real-time insights and interactive analytics to empower users.</div>
          <ul className="mt-2 list-disc list-inside text-white/90">
            <li>Dynamic charts and graphs</li>
            <li>Searchable & filterable data tables</li>
            <li>Customizable analytics reports</li>
          </ul>
        </div>
      ),
      icon: <LightBulbIcon className="w-4 h-4 text-pink-200 mb-3" />,
      gradient: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600",
      buttonLabel: "Learn More",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Greeting Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Project Nexus</h1>
          <p>Your professional capstone portfolio built with Next.js, Tailwind CSS, and creativity.</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <input
              type="text"
              placeholder="Type your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded text-gray-900"
            />
            <Button onClick={() => alert(`Hello, ${name || "Guest"}!`)}>Say Hello</Button>
          </div>

          <div className="mt-6">
            <p>Click the button to increase the count: {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              buttonLabel={feature.buttonLabel}
            />
          ))}
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-700">
        © 2025 Project Nexus. All rights reserved.
      </footer>
    </div>
  );
}
