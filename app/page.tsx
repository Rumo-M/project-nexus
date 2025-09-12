"use client"; // Must be the very first line

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function HomePage() {
  const [count, setCount] = useState(0); // example useState usage

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Project Nexus</h1>
        <p className="mb-4">Click the button to increase the count:</p>
        <Button onClick={handleClick}>Count: {count}</Button>
      </main>

      <Footer />
    </div>
  );
}
