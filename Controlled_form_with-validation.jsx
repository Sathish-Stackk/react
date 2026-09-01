import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email.includes("@")) {
      setError("Please enter a valid name and email.");
      return;
    }
    setError("");
    alert(`Welcome, ${formData.name}!`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Sign Up</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default SignupForm;
