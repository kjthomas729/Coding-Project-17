// src/TaskGenerator.js
import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep pushing forward!",
  "You can do it!",
  "Stay focused and keep grinding!",
  "Great work, keep it up!",
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const markAsCompleted = () => {
    tasks[currentTaskIndex].isCompleted = true;
  };

  return (
    <div>
      <h2>Task Generator</h2>
      <div>
        <FancyText 
          title={true} 
          text={tasks[currentTaskIndex].name} 
        />
        <p>Status: {tasks[currentTaskIndex].isCompleted ? "Completed ✔" : "Pending"}</p>
        <button onClick={markAsCompleted}>Mark as Completed</button>
        <button onClick={nextTask}>Next Task</button>
      </div>
      <FancyText 
        title={false} 
        text={motivationalMessages[currentTaskIndex % motivationalMessages.length]} 
      />
    </div>
  );
};

export default TaskGenerator;