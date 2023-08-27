import { useDispatch, useSelector } from 'react-redux';
import CustomForm from '../CustomForm';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';
import { addTask } from '../../app/taskSlice';

const TaskList = () => {
  const dispatch= useDispatch();
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  // console.log(tasks)
  //  const sortedTasks = tasks.slice().sort((a, b) => b.id.localeCompare(a.id));
   // Reverse the order of tasks
  const reversedTasks = tasks.slice().reverse();

  const handelAddTask = (newTask) => {
    dispatch(addTask(newTask)); 
  }

  return (
    <>
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm
      onAddTask={handelAddTask}
      />
      {tasks && (
        <ul className={tasks}> 
          {reversedTasks.map(task => (
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