import { useState } from "react";

function HabitTracker() {
  const [habits, setHabits] = useState([
    { name: "Read Books", done: false },
    { name: "Practice Coding", done: false },
    { name: "Exercise", done: false }
  ]);

  const toggleHabit = (index) => {
    setHabits(habits.map((habit, i) =>
      i === index ? { ...habit, done: !habit.done } : habit
    ));
  };

  return (
    <div>
      <h2>Daily Habit Tracker</h2>
      {habits.map((habit, index) => (
        <p key={habit.name}>
          <input
            type="checkbox"
            checked={habit.done}
            onChange={() => toggleHabit(index)}
          />
          {habit.name} {habit.done ? "Completed" : "Pending"}
        </p>
      ))}
      <h3>Completed: {habits.filter(h => h.done).length}/3</h3>
    </div>
  );
}

export default HabitTracker;
