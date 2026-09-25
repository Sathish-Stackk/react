import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Live Digital Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
