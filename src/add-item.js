import TaskObject from './task-object.js';
import renderList from './render-list.js';

const addTask = (description, arr) => {
  const aTask = new TaskObject(description, arr.length);
  arr.push(aTask);
  renderList(arr);
  localStorage.setItem('To-Do List', JSON.stringify(arr));
  document.getElementById('add-task').value = '';
};

export default addTask;