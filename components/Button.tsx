// components/Button.tsx
interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  );
}
