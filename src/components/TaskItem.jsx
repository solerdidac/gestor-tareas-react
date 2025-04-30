import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function TaskItem({ task, index }) {
  const { users, setUsers, selectedUserIndex } = useContext(UserContext);

  const toggleTask = () => {
    const newUsers = [...users];
    newUsers[selectedUserIndex].tasks[index].completed = !task.completed;
    setUsers(newUsers);
  };

  const deleteTask = () => {
    const newUsers = [...users];
    newUsers[selectedUserIndex].tasks.splice(index, 1);
    setUsers(newUsers);
  };

  const editTask = () => {
    const newText = prompt('Editar tarea:', task.text);
    if (newText !== null && newText.trim() !== '') {
      const newUsers = [...users];
      newUsers[selectedUserIndex].tasks[index].text = newText.trim();
      setUsers(newUsers);
    }
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={toggleTask}>{task.text}</span>
      <div className="actions">
        <button onClick={editTask}>✏️</button>
        <button onClick={deleteTask}>🗑️</button>
      </div>
    </li>
  );
}
