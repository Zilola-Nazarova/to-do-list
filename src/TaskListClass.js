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
        const aTask = new taskObject (description);
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

const taskList = new TaskList();
taskList.init();

class taskObject {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = taskList.tasks.length + 1;
  }
};

const listName = "Today's To Do";
const label = document.querySelector('label');
label.innerHTML = listName;

const renderList = (arr) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedArr.length; i += 1) {
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

    label.appendChild(input);
    label.appendChild(checkmark);
    label.innerHTML += `${sortedArr[i].description}`;
    label.appendChild(moveBtn);

    li.appendChild(label);
    ul.appendChild(li);
  }
};
