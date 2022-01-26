import './style.css';

const toDoTasks = [
  {
    description: 'Make breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Drink Juice',
    completed: true,
    index: 1,
  },
  {
    description: 'Go out',
    completed: false,
    index: 2,
  },
];

const List = document.querySelector('.List');

const createList = () => {
  toDoTasks.forEach((task) => {
    const element = document.createElement('li');
    element.innerHTML = `<div class="left"><i class="far fa-square"></i> ${task.description} </div><i class="fa fa-ellipsis-v"></i>`;
    element.classList.add('rows');
    List.append(element);
  });
};

window.onload = createList();