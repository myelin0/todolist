export default class Storage {
  static storeData(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static getData() {
    return localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }
}
