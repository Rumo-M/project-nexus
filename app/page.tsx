"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Heroicons for Features
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-pulse">
          Welcome to Project Nexus
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
          Your professional capstone portfolio built with Next.js and Tailwind CSS.
        </p>
        {/* Optional decorative shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 animate-ping"></div>
      </section>

      {/* Interactive Section */}
      <section className="flex flex-col items-center space-y-6 py-16 px-4 md:px-0">
        <Input
          label="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <Button
          label="Say Hello"
          onClick={() => alert(`Hello, ${name || "Guest"}!`)}
          className="hover:bg-indigo-700 transition-colors duration-300"
        />
        <div className="text-center">
          <p className="mb-2 font-semibold text-gray-700">Click the button to increase the count: {count}</p>
          <Button
            label="Increase Count"
            onClick={() => setCount(count + 1)}
            className="hover:bg-green-600 transition-colors duration-300"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-4 md:px-0">
        {[
          {
            title: "Task Management",
            description: (
              <>
                Easily create, organize, and prioritize tasks to boost productivity and workflow efficiency.
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Drag-and-drop task organization for quick adjustments</li>
                  <li>Real-time updates to keep your work synced across devices</li>
                  <li>Customizable task categories and priorities for personal workflow</li>
                </ul>
              </>
            ),
            icon: <AcademicCapIcon className="w-8 h-8 text-blue-500 mb-3" />,
            buttonLabel: "Learn More",
            onClick: () => alert("Task Management Feature Details"),
          },
          {
            title: "Modern Tech Stack",
            description: (
              <>
                Built using cutting-edge technologies to ensure a fast, responsive, and maintainable application.
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Next.js App Router for scalable architecture and routing</li>
                  <li>Tailwind CSS for a modern, responsive, and polished UI</li>
                  <li>React Hooks and modular components for maintainable code</li>
                </ul>
              </>
            ),
            icon: <CodeBracketIcon className="w-8 h-8 text-green-500 mb-3" />,
            buttonLabel: "Learn More",
            onClick: () => alert("Tech Stack Feature Details"),
          },
          {
            title: "Interactive Dashboard",
            description: (
              <>
                The dashboard provides real-time insights and interactive analytics that empower users to make data-driven decisions.
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Dynamic charts and graphs that update instantly</li>
                  <li>Searchable and filterable data tables for detailed exploration</li>
                  <li>Customizable analytics reports tailored to user needs</li>
                </ul>
              </>
            ),
            icon: <LightBulbIcon className="w-8 h-8 text-yellow-500 mb-3" />,
            buttonLabel: "Learn More",
            onClick: () => alert("Interactive Dashboard Details"),
          },
        ].map((feature, idx) => (
          <Card
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-xl p-6 bg-white"
          >
            <Button label={feature.buttonLabel} onClick={feature.onClick} className="hover:bg-indigo-600 transition-colors duration-300" />
          </Card>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
