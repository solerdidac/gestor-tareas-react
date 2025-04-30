import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import TaskSection from './TaskSection';

export default function Main() {
  const { users, selectedUserIndex } = useContext(UserContext);

  // Si no hay usuario seleccionado
  if (selectedUserIndex === null) {
    return (
      <main className="main">
        <div className="card">
          <h1 id="mainTitle">Selecciona un usuario</h1>
        </div>
      </main>
    );
  }

  // Usuario seleccionado
  const user = users[selectedUserIndex];

  return (
    <main className="main">
      <div className="card">
        <h1 id="mainTitle">Tareas de {user.name}</h1>
        <TaskSection />
      </div>
    </main>
  );
}
