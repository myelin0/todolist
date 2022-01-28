import Storage from './storage.js';
import displayTasks from './Display.js';

export default class Tasks {
  constructor(listContainer) {
    this.listContainer = listContainer;
  }

  setTasks = (description, completed = false) => {
    const tasks = Storage.getData();
    const id = tasks.length + 1;
    tasks.push({ description, completed, id });
    Storage.storeData(tasks);
    Tasks.refreshPage(this.listContainer);
  };

  static refreshPage = (listContainer) => {
    const myDisplay = displayTasks();
    listContainer.innerHTML = myDisplay;
  };

  static removeTask(taskID, clear = false) {
    let tasks = Storage.getData('tasks');
    if (!clear) {
      tasks = tasks.filter((task) => task.id !== Number(taskID));
    } else {
      tasks = tasks.filter((task) => task.completed !== true);
    }
    Tasks.updateTaskItemID(tasks);
  }

  static updateTaskItemID= (List) => {
    let i = 0;
    const { length } = List;
    for (i; i < length; i += 1) {
      List[i].index = i + 1;
    }
    Storage.storeData(List);
  }
}