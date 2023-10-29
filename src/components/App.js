import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categoryFilter, setCategoryFilter] = useState('All')

  function handleDelete(taskToDelete) {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks)
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleCategoryFilter(category) {
    setCategoryFilter(category)
  }

  const filteredTasks = tasks.filter(task => {
    if (categoryFilter === "All"){
      return (
        task
      )} else {
        return (
          task.category === categoryFilter
        )
      }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryFilter={categoryFilter} onCategorySelect={handleCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList onDelete={handleDelete} tasks={filteredTasks}/>
    </div>
  );
}

export default App;
