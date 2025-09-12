"use client";

interface CardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  gradient: string;
  buttonLabel: string;
}

export default function Card({ title, description, icon, gradient, buttonLabel }: CardProps) {
  return (
    <div className={`rounded-lg shadow p-6 ${gradient} hover:shadow-lg transition-shadow`}>
      <div className="flex items-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-white/90 mb-4">{description}</div>
      <button className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition">
        {buttonLabel}
      </button>
    </div>
  );
}
