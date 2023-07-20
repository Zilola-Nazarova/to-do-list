import renderList from './render-list.js';

const clearCompleted = (arr) => {
  arr = arr.filter((task) => task.completed === false);
  renderList(arr);
  localStorage.setItem('To-Do List', JSON.stringify(arr));
};

export default clearCompleted;