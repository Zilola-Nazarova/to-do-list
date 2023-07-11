import _ from 'lodash';
import './style.css';
import Drag from './drag-handle-minor-svgrepo-com.svg';

const listName = "Today's To Do";
const tasksArray = [
  {
    description: 'Read an article on Webpack',
    completed: true,
    index: 0,
  },
  {
    description: 'Create an index.js file',
    completed: true,
    index: 3,
  },
  {
    description: 'Setup the Webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'Create an index.html file',
    completed: true,
    index: 2,
  },
  {
    description: 'Add styles to the project',
    completed: false,
    index: 5,
  },
  {
    description: 'Display the list',
    completed: true,
    index: 4,
  },
]


const label = document.querySelector('label');
label.innerHTML = listName;

const renderList = (arr) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = ''; 

  const sortedArr = [...arr];
  sortedArr.sort(function (a, b) {
    return a.index - b.index;
  })

  for (let i = 0; i < sortedArr.length; i += 1) {
    let task = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let checkmark = document.createElement('span');
    let moveBtn = document.createElement('button');
    let icon = document.createElement('img');
    icon.src = Drag;
    moveBtn.appendChild(icon);
    checkmark.classList.add('checkmark');
    input.setAttribute('type', 'checkbox');   
    
    label.appendChild(input);
    label.appendChild(checkmark);
    task.appendChild(label);
    label.innerHTML += `${sortedArr[i].description}`;
    label.appendChild(moveBtn);
    ul.appendChild(task);
  }
}
  
renderList(tasksArray); 