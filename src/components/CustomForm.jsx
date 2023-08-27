import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ onAddTask }) => {
  const [newTask, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const task = {id: uuidv4(),name: newTask, checked: false,};
    onAddTask(task)
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={newTask}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Enter Task</label>
      </div>
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm