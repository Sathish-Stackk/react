import { useState } from "react";

function TypingSpeedTester() {
  const sentence = "Practice makes programming easier";
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [speed, setSpeed] = useState(null);

  const checkSpeed = (value) => {
    if (!started) {
      setStarted(true);
      setStartTime(Date.now());
    }
    setText(value);

    if (value === sentence) {
      setSpeed(Math.round(5 * sentence.split(" ").length /
        ((Date.now() - startTime) / 60000)));
    }
  };

  return (
    <div>
      <h2>Typing Speed Tester</h2>
      <p>{sentence}</p>
      <textarea
        value={text}
        onChange={(e) => checkSpeed(e.target.value)}
        placeholder="Type the sentence here..."
        disabled={speed !== null}
      />
      {speed !== null && <h3>Estimated Speed: {speed} WPM</h3>}
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}

export default TypingSpeedTester;
