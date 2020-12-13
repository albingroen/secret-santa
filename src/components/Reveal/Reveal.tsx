import { useState } from "react";
import { random } from "lodash-es";

interface IRevealProps {
  participants: string[];
  onFinish: () => void;
}

export default function Reveal({ participants, onFinish }: IRevealProps) {
  const [occupiedParticipants, setOccupiedParticipants] = useState<string[]>(
    []
  );
  const [participant, setParticipant] = useState<string>(participants[0]);
  const [participantToBuyTo, setParticipantToBuyTo] = useState<string>();
  const [error, setError] = useState<string>();

  const reveal = () => {
    // Make sure you can't pick yourself or anyone that's already been picked.
    const otherParticipants = participants.filter(
      (p) => p !== participant && !occupiedParticipants.includes(p)
    );

    // Find a random participant to buy a gift to.
    const randomParticipant =
      otherParticipants[random(0, otherParticipants.length - 1)];

    if (!randomParticipant) {
      return setError(
        "Everyone has already been picked. Please restart the game to try again."
      );
    }

    // Add the random participant to the list of occpied participants.
    setOccupiedParticipants([...occupiedParticipants, randomParticipant]);

    // Show who the participant should buy to.
    setParticipantToBuyTo(randomParticipant);
  };

  const restart = () => {
    setParticipantToBuyTo(undefined)
    setParticipant(participants[0])
    setOccupiedParticipants([])
    setError(undefined)
  }

  const nextParticipant = participants[participants.indexOf(participant) + 1];

  return (
    <div className="reveal">
      <h1>{`${participant}s tur`}</h1>

      {participantToBuyTo ? (
        <div>
          <p className="buy-too">{`You should buy a gift to ${participantToBuyTo}!`}</p>

          {nextParticipant ? (
            <button
              onClick={() => {
                setParticipantToBuyTo(undefined);
                setParticipant(nextParticipant);
              }}
            >
              Next participant
            </button>
          ) : (
            <button onClick={onFinish}>Finish game</button>
          )}
        </div>
      ) : error ? (
        <div className="error">
          <p>{error}</p>

          <button onClick={restart}>Restart the game</button>
        </div>
      ) : (
        <button onClick={reveal}>Who should I buy to?</button>
      )}
    </div>
  );
}
