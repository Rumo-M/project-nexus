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

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-5xl mx-auto space-y-10">
        {/* Welcome Section */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Project Nexus</h2>
          <p className="text-gray-700 text-lg">
            Your professional capstone portfolio built with Next.js & Tailwind CSS.
          </p>
        </section>

        {/* Interactive Section */}
        <section className="text-center space-y-4">
          <Input
            label="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
          />
          <Button label="Say Hello" onClick={() => alert(`Hello, ${name || "Guest"}!`)} />
          <div className="mt-4">
            <p className="mb-2">Click the button to increase the count: {count}</p>
            <Button label="Increase Count" onClick={() => setCount(count + 1)} />
          </div>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Feature 1" description="Showcase your first amazing feature." />
          <Card title="Feature 2" description="Highlight another project skill here." />
          <Card title="Feature 3" description="Explain something interesting about your app." />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
