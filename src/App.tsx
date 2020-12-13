import React from "react";
import { useState } from "react";
import AddParticipant from "./components/AddParticipant/AddParticipant";
import Reveal from "./components/Reveal/Reveal";

function App() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0);

  switch (step) {
    case 0:
      return (
        <div className="app">
          <div className="names">
            {participants.map((participant) => (
              <p key={participant}>{participant}</p>
            ))}
          </div>

          <AddParticipant
            onSubmit={(name) => setParticipants([...participants, name])}
          />

          {participants.length > 1 ? (
            <button onClick={() => setStep(1)}>Next step</button>
          ) : null}
        </div>
      );
    case 1:
      return (
        <div className="app">
          <Reveal onFinish={() => setStep(2)} participants={participants} />
        </div>
      );
    case 2:
      return (
        <div className="app">
          <h1 className="finish">
            Now everyone should have someone to buy a gift to!
          </h1>
          <button
            onClick={() => {
              setParticipants([]);
              setStep(0);
            }}
          >
            Start over
          </button>
        </div>
      );
    default:
      return null;
  }
}

export default App;
