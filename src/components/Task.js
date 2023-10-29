import React from "react";

function Task({ category, text, onDelete, task }) {

  function handleDeleteClick() {
    onDelete(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick} className="delete">X</button>
    </div>
  );
}

export default Task;
