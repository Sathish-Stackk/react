import { useEffect, useState } from "react";

function NetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineEvent = () => setOnline(true);
    const offlineEvent = () => setOnline(false);

    window.addEventListener("online", onlineEvent);
    window.addEventListener("offline", offlineEvent);

    return () => {
      window.removeEventListener("online", onlineEvent);
      window.removeEventListener("offline", offlineEvent);
    };
  }, []);

  return (
    <h2>
      Status: {online ? "Connected 🌐" : "Offline 🔴"}
    </h2>
  );
}

export default NetworkStatus;
