import "./style.css";
import TasksUI from "./modules/tasks-list.js";
import Tasks from "./modules/tasksClass.js";
import Methods from "./modules/methods.js";
import { markComplete, clearComplete } from "./modules/complete.js";

TasksUI();
const listContainer = document.querySelector(".todo");
const input = document.querySelector("#new-item");
const formBtn= document.querySelector('.link-button');
const todoContainer = document.querySelector(".List");
const clearCompletedItem = document.querySelector(".clear");

const methods = new Methods([], false, todoContainer);
const addList = new Tasks(todoContainer);

const addTask = () => {
  if (input.value !== "") {
    addList.setTasks(input.value);
    console.log(input.value)
    input.value = "";
    window.location.reload();
  }
};

listContainer.addEventListener("click", (e) => {
  const getItemTagName = e.target.tagName;
  if (getItemTagName === "LI") {
    const li = e.target;
    const { id } = e.target;
    methods.markListForChange(li, id);
  } else if (e.target.tagName === "INPUT") {
    const checkbox = e.target;
    const { id } = e.target;
    // markComplete(checkbox, id, listContainer);
  }
});

// clearCompletedItem.addEventListener("click", (e) => {
//   if (!clearComplete(listContainer)) {
//     e.preventDefault();
//   } else {
//     clearComplete(listContainer);
//   }
// });

formBtn.addEventListener("click", addTask);
// window.onload = createList();
