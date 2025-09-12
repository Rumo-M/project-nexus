// components/Input.tsx
interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

export default function Input({ label, value, onChange, type = "text", placeholder = "" }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}
