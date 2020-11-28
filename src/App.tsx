import { useState } from "react";
import AddParticipant from "./components/AddParticipant/AddParticipant";
import Reveal from "./components/Reveal/Reveal";

function App() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0);

  switch (step) {
    case 0:
      return (
        <div>
          <ul>
            {participants.map((participant) => (
              <li key={participant}>{participant}</li>
            ))}
          </ul>

          <AddParticipant
            onSubmit={(name) => setParticipants([...participants, name])}
          />

          <button onClick={() => setStep(1)}>Next step</button>
        </div>
      );
    case 1:
      return (
        <div>
          <Reveal onFinish={() => setStep(2)} participants={participants} />
        </div>
      );
    case 2:
      return (
        <div>
          <h1>Now everyone should have someone to buy a gift to!</h1>
        </div>
      );
    default:
      return null;
  }
}

export default App;
