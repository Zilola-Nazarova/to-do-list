import taskObject from './TaskObject.js';

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
      console.log(this.tasks);
      this.renderList();
    });
  };

  addingEventListener() {
    const description = document.getElementById('add-task').value;
    if (description !== '') {
      const aTask = new taskObject (description, this.tasks.length);
      this.addTask(aTask);
      this.renderList();
      document.getElementById('add-task').value = '';
    }
  }

  addTask(aTask) {
    this.tasks.push(aTask);
    localStorage.setItem('To-Do List', JSON.stringify(this.tasks));
  };

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.renderList();
    localStorage.setItem('To-Do List', JSON.stringify(this.tasks));
  };

  renderList () {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
  
    const sortedArr = [...this.tasks];
    sortedArr.sort((a, b) => a.index - b.index);
    
    for (let i = 0; i < sortedArr.length; i += 1) {
      this.tasks[i].index = i + 1;
      const li = document.createElement('li');
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
  
      const checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');
      
      const moveBtn = document.createElement('button');
  
      const iconInBtn = document.createElement('img');
      iconInBtn.src = './drag-handle-minor-svgrepo-com.svg';
      moveBtn.appendChild(iconInBtn);
  
      moveBtn.addEventListener('click', () => {
        this.deleteTask(i);
      });
  
      label.appendChild(input);
      label.appendChild(checkmark);
      label.innerHTML += `${sortedArr[i].description}`;
      label.appendChild(moveBtn);
  
      li.appendChild(label);
      ul.appendChild(li);
    }
  };
};

export default TaskList;