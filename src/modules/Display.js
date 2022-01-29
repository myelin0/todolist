import Storage from './storage.js';

export default function displayTasks(tasks) {
  tasks = Storage.getData('tasks');
  let display = '';
  if (tasks.length < 0) {
    return display;
  }

  tasks.forEach((task) => {
    if (!task.completed) {
      display += `<li id="${task.id}">
                  <div><input type="checkbox" name="check" id="${task.id}" /> <span>${task.description}</span></div>
                    <span><i class="fas fa-ellipsis-v dots cursorC"></i>
                    <i class="far fa-trash-alt trash cursorC"></i></span>
                  </li>`;
    } else {
      display += `<li id="${task.id}">
        <div><input type="checkbox" name="check" id="${task.id}" checked/> 
        <span class="completed">${task.description}</span></div>
          <span><i class="fas fa-ellipsis-v dots cursorC"></i>
          <i class="far fa-trash-alt trash cursorC"></i></span>
        </li>`;
    }
  });

  return display;
}
