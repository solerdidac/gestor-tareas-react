import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function SidebarInfo() {
  const {
    users,
    selectedUserIndex,
    setSelectedUserIndex
  } = useContext(UserContext);

  const user = users[selectedUserIndex];
  const completed = user.tasks.filter(t => t.completed).length;

  return (
    <div id="userInfo">
      <hr />
      <p id="userName">{user.name}</p>
      <p id="userStats">
        Tareas: {completed} / {user.tasks.length} completadas
      </p>
      <button onClick={() => setSelectedUserIndex(null)}>
        Deseleccionar
      </button>
    </div>
  );
}
