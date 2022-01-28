import _ from "lodash";
import "./style.css";
import TasksUI from "./modules/tasks-list.js";
import Tasks from "./modules/tasksClass.js";
import Methods from "./modules/methods.js";
import { markComplete, clearComplete } from "./modules/complete.js";

TasksUI();
const listContainer = document.querySelector(".List");
const input = document.getElementById("newItem");
console.log(input);
const formBtn = document.querySelector(".form-btn");
const todoContainer = document.querySelector(".List");
const clearCompletedItem = document.querySelector(".link-button");

const methods = new Methods([], false, todoContainer);
const addList = new Tasks(todoContainer);

function component() {
  const element = document.createElement("div");
  element.innerHTML = _;
  return element;
}

const addTask = () => {
  if (input.value !== "") {
    addList.setTasks(input.value);
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
    markComplete(checkbox, id, listContainer);
  }
});

clearCompletedItem.addEventListener('click', (e) => {
  if (!clearComplete(listContainer)) {
    e.preventDefault();
  } else {
    clearComplete(listContainer);
  }
});

formBtn.addEventListener('click', addTask);

const refreshIcon=document.querySelector(".fa-sync");
refreshIcon.addEventListener('click',()=>{
  localStorage.clear();
  location.reload();
})

document.body.appendChild(component());
