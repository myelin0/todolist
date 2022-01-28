import Storage from "./storage.js";
import { displayTasks } from "./Display.js";
import Tasks from "./tasksClass.js";

const Render = (listcontainer) => {
  const myDisplay = displayTasks();
  listcontainer.innerHTML = myDisplay;
};
// const markComplete = (checkbox, id, listContainer) => {
//   const { checked } = checkbox;
//   const toDoList = Storage.getData();
//   toDoList[id - 1].completed = checked;
//   Storage.storeData(toDoList);
//   Render(listContainer);
// };

const clearComplete = (listContainer) => {
  Tasks.removeTask(0, true);
  Render(listContainer);
};

// export { markComplete, clearComplete };
