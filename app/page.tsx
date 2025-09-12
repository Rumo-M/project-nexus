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
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Project Nexus</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your professional capstone portfolio built with Next.js and Tailwind CSS.
        </p>
      </section>

      {/* Interactive Section */}
      <section className="flex flex-col items-center space-y-6 py-12 px-4 md:px-0">
        <Input
          label="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <Button label="Say Hello" onClick={() => alert(`Hello, ${name || "Guest"}!`)} />
        <div className="text-center">
          <p className="mb-2 font-semibold">Click the button to increase the count: {count}</p>
          <Button label="Increase Count" onClick={() => setCount(count + 1)} />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4 md:px-0">
        {/* Feature 1 */}
        <Card
          title="Task Management"
          description={
            <>
              Easily create, organize, and prioritize tasks to boost productivity and workflow efficiency.
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Drag-and-drop task organization for quick adjustments</li>
                <li>Real-time updates to keep your work synced across devices</li>
                <li>Customizable task categories and priorities for personal workflow</li>
              </ul>
            </>
          }
          icon={<AcademicCapIcon className="w-6 h-6 text-blue-500 mb-2" />}
        >
          <Button label="Learn More" onClick={() => alert("Task Management Feature Details")} />
        </Card>

        {/* Feature 2 */}
        <Card
          title="Modern Tech Stack"
          description={
            <>
              Built using cutting-edge technologies to ensure a fast, responsive, and maintainable application.
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Next.js App Router for scalable architecture and routing</li>
                <li>Tailwind CSS for a modern, responsive, and polished UI</li>
                <li>React Hooks and modular components for maintainable code</li>
              </ul>
            </>
          }
          icon={<CodeBracketIcon className="w-6 h-6 text-green-500 mb-2" />}
        >
          <Button label="Learn More" onClick={() => alert("Tech Stack Feature Details")} />
        </Card>

        {/* Feature 3 */}
        <Card
          title="Interactive Dashboard"
          description={
            <>
              The dashboard provides real-time insights and interactive analytics that empower users to make data-driven decisions.
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Dynamic charts and graphs that update instantly</li>
                <li>Searchable and filterable data tables for detailed exploration</li>
                <li>Customizable analytics reports tailored to user needs</li>
              </ul>
            </>
          }
          icon={<LightBulbIcon className="w-6 h-6 text-yellow-500 mb-2" />}
        >
          <Button label="Learn More" onClick={() => alert("Interactive Dashboard Details")} />
        </Card>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
