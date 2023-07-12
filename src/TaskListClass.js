import TaskObject from './TaskObject.js';

class TaskList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('To-Do List')) || [];
  }

  init() {
    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.addingEventListener();
    });

    document.getElementById('add-task').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.addingEventListener();
      }
    });

    window.addEventListener('load', () => {
      this.renderList();
    });
  }

  addingEventListener() {
    const description = document.getElementById('add-task').value;
    if (description !== '') {
      const aTask = new TaskObject(description, this.tasks.length);
      this.addTask(aTask);
      this.renderList();
      document.getElementById('add-task').value = '';
    }
  }

  addTask(aTask) {
    this.tasks.push(aTask);
    localStorage.setItem('To-Do List', JSON.stringify(this.tasks));
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.renderList();
    localStorage.setItem('To-Do List', JSON.stringify(this.tasks));
  }

  renderList() {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    const sortedArr = [...this.tasks];
    sortedArr.sort((a, b) => a.index - b.index);

    for (let i = 0; i < sortedArr.length; i += 1) {
      this.tasks[i].index = i + 1;
      const li = document.createElement('li');
      // const label = document.createElement('label');
      const input = document.createElement('input');

      const checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');

      const moveBtn = document.createElement('button');

      const iconInBtn = document.createElement('img');
      iconInBtn.src = './drag-handle-minor-svgrepo-com.svg';
      moveBtn.appendChild(iconInBtn);

      moveBtn.addEventListener('click', () => {
        this.deleteTask(i);
      });

      input.addEventListener('click', () => {
        document.querySelectorAll('li').forEach((element) => {
          element.classList.remove('on-edit');
        });
        li.classList.add('on-edit');
      });

      input.addEventListener('blur', () => {
        document.querySelectorAll('li').forEach((element) => {
          element.classList.remove('on-edit');
        });
      });

      li.appendChild(checkmark);
      li.appendChild(input);
      input.value = `${sortedArr[i].description}`;
      li.appendChild(moveBtn);
      ul.appendChild(li);

      checkmark.addEventListener('click', () => {
        checkmark.classList.toggle('checked');
      });
    }
  }
}

export default TaskList;