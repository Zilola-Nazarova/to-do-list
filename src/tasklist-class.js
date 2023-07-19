import completedIsFalse from './completed-filter.js';
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
      this.clearCompleted();
    });

    window.addEventListener('load', () => {
      renderList(this.tasks);
    });
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(completedIsFalse);
    renderList(this.tasks);
    localStorage.setItem('To-Do List', JSON.stringify(this.tasks));
  }
}

export default TaskList;