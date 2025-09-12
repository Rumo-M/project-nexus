"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Header */}
      <Header />
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
          <Button
            label="Increase Count"
            onClick={() => setCount(count + 1)}
          />
        </div>
      </section>

      {/* Features / Cards Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4 md:px-0">
        <Card
          title="Feature 1"
          description="Showcase your first amazing feature."
          className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition"
        />
        <Card
          title="Feature 2"
          description="Highlight another project skill here."
          className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition"
        />
        <Card
          title="Feature 3"
          description="Explain something interesting about your app."
          className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition"
        />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
