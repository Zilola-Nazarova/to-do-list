import renderList from './RenderList.js';
import taskObject from './TaskObject.js';

class TaskList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('To-Do List')) || [];
  }

  init() {
    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      const description = document.getElementById('add-task').value;
      if (description !== '') {
        const aTask = new taskObject (description, this.tasks.length);
        this.addTask(aTask);
        renderList(this.tasks);
        document.getElementById('add-task').value = '';
      }
    });

    window.addEventListener('load', () => {
      console.log(this.tasks);
      renderList(this.tasks);
    });
  };

  addTask(aTask) {
    this.tasks.push(aTask);
    localStorage.setItem('To-Do List', JSON.stringify(this.tasks));
  };
};

export default TaskList;