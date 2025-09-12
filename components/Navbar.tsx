// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Project Nexus</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
