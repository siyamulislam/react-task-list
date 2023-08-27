import appName from '../../package.json';
const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid"); 

const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem(`${appName.name}.tasks`);
    console.log(serializedTasks)
    if (serializedTasks === null) {
      return [
        { id: uuidv4(), name: "Morning walk", checked: false },
        { id: uuidv4(), name: "Breakfast", checked: false },
      ];
    }
    return JSON.parse(serializedTasks);
  } catch (err) {
    console.error("Error loading tasks from local storage:", err);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem(`${appName.name}.tasks`, serializedTasks);
  } catch (err) {
    console.error("Error saving tasks to local storage:", err);
  }
};

const initialTasks = {
  tasks: loadTasksFromLocalStorage(),
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    showTasks: (state) => state,
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    updateTask: (state, action) => {
      const { id, name, checked } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.name = name;
        taskToUpdate.checked = checked;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    updateTaskChecked: (state, action) => {
      const id = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      console.log(taskToUpdate.checked)
      if (taskToUpdate){
        taskToUpdate.checked = !taskToUpdate.checked;
        saveTasksToLocalStorage(state.tasks);
      }
      
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
      saveTasksToLocalStorage(state.tasks);
    },
  },
});

export const { showTasks, addTask, deleteTask, updateTask,updateTaskChecked } =
  tasksSlice.actions;
export default tasksSlice.reducer;