import React, { useState } from "react";

function NotesApp() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <div>
      <h2>Notes App</h2>

      <input
        type="text"
        placeholder="Write a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp;
