import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function NewUserForm() {
  const [name, setName] = useState('');
  const { users, setUsers } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setUsers([...users, { name: trimmed, tasks: [] }]);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="newUserInput"
        placeholder="Nuevo usuario..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Añadir Usuario</button>
    </form>
  );
}
