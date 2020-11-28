import { useState } from "react";

interface IAddParticipantProps {
  onSubmit: (name: string) => void;
}

export default function AddParticipant({ onSubmit }: IAddParticipantProps) {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <input
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="John Doe..."
        value={name}
        type="text"
      />

      <button
        onClick={() => {
          if (name) {
            onSubmit(name);
            setName("");
          }
        }}
      >
        Add user
      </button>
    </div>
  );
}
