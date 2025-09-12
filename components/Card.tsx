// components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="border rounded-lg shadow p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-600 mb-4">{description}</div>
      {children}
    </div>
  );
}
