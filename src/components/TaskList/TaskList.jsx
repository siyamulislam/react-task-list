
import { useSelector } from 'react-redux';
import CustomForm from '../CustomForm';
import EditForm from '../EditForm';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';
import { useState } from "react";

const TaskList = () => {
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  console.log(tasks)

  const addTask = (task) => {

  }

  // const deleteTask = (id) => {

  // }

  // const toggleTask = (id) => {

  // }

  const updateTask = (task) => {

    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
  }

  // const enterEditMode = (task) => {
  //   setEditedTask(task);
  //   setIsEditing(true);
  // }
  return (
    <>
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask} />
      {tasks && (
        <ul className={tasks}>
          {/* {tasks.sort((a, b) => b.id - a.id).map(task => ( */}
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))
          }
        </ul>
      )}
    </>
  )
}
export default TaskList;