import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function NewTaskForm() {
  const [text, setText] = useState('');
  const { users, setUsers, selectedUserIndex } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const newUsers = [...users];
    newUsers[selectedUserIndex].tasks.push({ text: trimmed, completed: false });
    setUsers(newUsers);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="newTaskInput"
        placeholder="Nueva tarea..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
}
