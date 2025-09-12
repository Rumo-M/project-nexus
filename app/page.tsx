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

  const features = [
    {
      title: "Task Management",
      description: (
        <>
          Easily create, organize, and prioritize tasks to boost productivity.
          <ul className="mt-2 list-disc list-inside text-white/90">
            <li>Drag-and-drop task organization</li>
            <li>Real-time sync across devices</li>
            <li>Customizable task categories & priorities</li>
          </ul>
        </>
      ),
      icon: <AcademicCapIcon className="w-10 h-10 text-yellow-200 mb-3" />,
      gradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
      buttonLabel: "Learn More",
    },
    {
      title: "Modern Tech Stack",
      description: (
        <>
          Cutting-edge technologies for speed and maintainability.
          <ul className="mt-2 list-disc list-inside text-white/90">
            <li>Next.js App Router</li>
            <li>Tailwind CSS for polished UI</li>
            <li>React Hooks & modular components</li>
          </ul>
        </>
      ),
      icon: <CodeBracketIcon className="w-10 h-10 text-cyan-200 mb-3" />,
      gradient: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600",
      buttonLabel: "Learn More",
    },
    {
      title: "Interactive Dashboard",
      description: (
        <>
          Real-time insights and interactive analytics.
          <ul className="mt-2 list-disc list-inside text-white/90">
            <li>Dynamic charts and graphs</li>
            <li>Searchable & filterable data tables</li>
            <li>Customizable analytics reports</li>
          </ul>
        </>
      ),
      icon: <LightBulbIcon className="w-10 h-10 text-pink-200 mb-3" />,
      gradient: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600",
      buttonLabel: "Learn More",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-pulse drop-shadow-lg">
          Welcome to Project Nexus
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
          Your professional capstone portfolio built with Next.js, Tailwind CSS, and creativity.
        </p>
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
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white font-bold transition-all duration-300"
        />
        <div className="text-center">
          <p className="mb-2 font-semibold text-gray-700">Click the button to increase the count: {count}</p>
          <Button
            label="Increase Count"
            onClick={() => setCount(count + 1)}
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 text-white font-bold transition-all duration-300"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-4 md:px-0">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className={`${feature.gradient} rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <Button
              label={feature.buttonLabel}
              onClick={() => alert(`${feature.title} Details`)}
              className="mt-4 bg-white text-black font-bold hover:bg-black hover:text-white transition-colors duration-300"
            />
          </Card>
        ))}
      </section>

      <Footer />
    </main>
  );
}
