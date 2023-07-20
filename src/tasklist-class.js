import clearCompleted from './clear-completed.js';
import addTask from './add-item.js';
import renderList from './render-list.js';

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
        addTask(description, this.tasks);
      }
    });

    document.getElementById('add-task').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const description = document.getElementById('add-task').value;
        if (description !== '') {
          addTask(description, this.tasks);
        }
      }
    });

    const clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', () => {
      clearCompleted(this.tasks);
      this.tasks = JSON.parse(localStorage.getItem('To-Do List'));
    });

    window.addEventListener('load', () => {
      renderList(this.tasks);
    });
  }
}

export default TaskList;