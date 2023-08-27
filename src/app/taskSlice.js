const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialTasks = {
  tasks: [
    { id: uuidv4(), name: "Morning walk", checked: false},
    { id: uuidv4(), name: "Breakfast", checked: false},
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    showTasks: (state) => state,
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, name, checked } = action.payload;
      const isTaskExist = state.tasks.filter((task) => task.id === id);
      if (isTaskExist) {
        isTaskExist[0].name = name;
        isTaskExist[0].checked = checked;
      }
    },
    updateTaskChecked: (state, action) => {
      const id = action.payload;
      const isTaskExist = state.tasks.filter((task) => task.id === id);
      if (isTaskExist)isTaskExist[0].checked = !isTaskExist[0].checked;
      
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { showTasks, addTask, deleteTask, updateTask,updateTaskChecked } =
  tasksSlice.actions;
export default tasksSlice.reducer;