/* eslint-disable import/no-cycle */
import renderList from './render-list.js';

const deleteTask = (arr, index) => {
  arr.splice(index, 1);
  renderList(arr);
  localStorage.setItem('To-Do List', JSON.stringify(arr));
};

export default deleteTask;