import { displayTasks } from "./Display";

const TasksUI = () => {
  const tasks = document.querySelector(".List");
  tasks.innerHTML = displayTasks();
};

export default TasksUI;