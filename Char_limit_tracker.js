import { useState } from "react";

export default function CharacterTracker() {
  const [text, setText] = useState("");
  const limit = 100;

  return (
    <div>
      <h2>Character Limit Tracker</h2>

      <textarea
        rows="5"
        cols="40"
        maxLength={limit}
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        Characters: {text.length} / {limit}
      </p>

      <p>Remaining: {limit - text.length}</p>
    </div>
  );
}
