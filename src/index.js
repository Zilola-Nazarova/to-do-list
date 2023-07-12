import './style.css';
import TaskList from './TaskListClass.js';

const listName = "Today's To Do";
const label = document.querySelector('label');
label.innerHTML = listName;

const taskList = new TaskList();
taskList.init();
