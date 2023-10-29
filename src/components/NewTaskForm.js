import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState(categories[0])


  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {text: text, category: category}
    onTaskFormSubmit(newTask)
    setText('')
    setCategory(categories[0])
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e => setText(e.target.value))} />
      </label>
      <label>
        Category
        <select value={category} name="category" onChange={(e => setCategory(e.target.value))} >
          {categories.map((category) => (
            <option value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
