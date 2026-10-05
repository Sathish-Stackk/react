import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [sessions, setSessions] = useState(0);

  const completeSession = () => {
    setSessions(sessions + 1);
    setMinutes(0);
  };

  return (
    <div>
      <h2>Study Session Tracker</h2>

      <input
        type="number"
        placeholder="Study minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />

      <p>Current Session: {minutes} minutes</p>
      <p>Completed Sessions: {sessions}</p>

      <button onClick={completeSession}>
        Complete Session
      </button>
    </div>
  );
}

export default App;
