import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks }) {
  return (
    <ul id="taskList">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
}
