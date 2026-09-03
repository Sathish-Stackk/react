import React, { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordToggle;
