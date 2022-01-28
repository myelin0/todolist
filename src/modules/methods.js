import displayTasks from './Display.js';
import Storage from './storage.js';
import Tasks from './tasksClass.js';

export default class Methods {
  constructor(itemsToDelete = [], toogle = false, List) {
    this.itemsToDelete = itemsToDelete;
    this.toogle = toogle;
    this.List = List;
    this.listLength = Storage.getData().length;
  }

  markListForChange(li, id) {
    const storageDataLength = Storage.getData().length;
    if (this.listLength < storageDataLength) {
      this.itemsToDelete.length = 0;
    }

    const taskDescription = li.firstChild.nextSibling.children[1];
    const elipsis = li.lastElementChild.children[0];
    const deleteIcon = li.lastElementChild.children[1];
    const index = this.itemsToDelete?.indexOf(id);

    if (index !== -1) {
      this.toogle = !this.toogle;
      this.itemsToDelete.splice(index, 1);
    } else {
      this.toogle = true;
      this.itemsToDelete.push(id);
      this.Listlength = Storage.getData().length;
    }

    if (this.toogle) {
      li.classList.add('markEdit');
      taskDescription.contentEditable = true;
      taskDescription.classList.add('setSpanBorders');
      taskDescription.focus();
      elipsis.classList.add('trash');
      deleteIcon.classList.remove('trash');
    } else {
      li.classList.remove('markEdit');
      taskDescription.contentEditable = false;
      elipsis.classList.remove('trash');
      deleteIcon.classList.add('trash');
      taskDescription.classList.remove('setSpanBorders');
      this.updateEdittedDescription(taskDescription, id);
    }

    this.addEventListenerForDelete(deleteIcon, id);
    this.toogle = true;
  }

  addEventListenerForDelete(deleteIcon) {
    deleteIcon.addEventListener('click', () => {
      this.remove(this.itemsToDelete);
    });
  }

  remove = (itemsToDelete) => {
    itemsToDelete.forEach((item) => {
      Tasks.removeTask(item);
    });
    const myDisplay = displayTasks();
    this.List.innerHTML = myDisplay;
    this.itemsToDelete.length = 0;
  };

  updateEdittedDescription = (span, id) => {
    const List = Storage.getData();
    const text = span.textContent;
    if (text !== '') {
      List[id - 1].description = text;
      Storage.storeData(List);
    } else {
      span.textContent = List[id - 1].description;
    }
    const myDisplay = displayTasks();
    this.List.innerHTML = myDisplay;
  };
}
