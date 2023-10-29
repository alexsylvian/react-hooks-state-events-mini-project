import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} onDelete={onDelete} text={task.text} category={task.category} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
