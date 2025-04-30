import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';

export default function TaskSection() {
  const { users, selectedUserIndex } = useContext(UserContext);
  const user = users[selectedUserIndex];

  return (
    <div id="taskSection">
      {user.tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        <TaskList tasks={user.tasks} />
      )}
      <NewTaskForm />
    </div>
  );
}
