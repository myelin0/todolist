import displayTasks from './Display.js';

const TasksUI = () => {
  const tasks = document.querySelector('.List');
  tasks.innerHTML = displayTasks();
};

export default TasksUI;