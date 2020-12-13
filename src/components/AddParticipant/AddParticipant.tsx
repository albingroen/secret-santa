import { useState } from "react";

interface IAddParticipantProps {
  onSubmit: (name: string) => void;
}

export default function AddParticipant({ onSubmit }: IAddParticipantProps) {
  const [name, setName] = useState<string>("");

  const handleAdd = () => {
    if (name) {
      onSubmit(name);
      setName("");
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <input
        onChange={(e) => setName(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
        placeholder="John Doe..."
        value={name}
        type="text"
        autoFocus
      />

      <button style={{margin: '1rem 0'}} onClick={handleAdd}>Add participant</button>
    </div>
  );
}
