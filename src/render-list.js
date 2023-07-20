/* eslint-disable import/no-cycle */
import deleteTask from './delete-item.js';
import updateInput from './update-input.js';
import updateStatus from './update-status.js';
import dragIcon from './icons/drag-handle-minor-svgrepo-com.svg';
import binIcon from './icons/bin-svgrepo-com.svg';

const renderList = (arr) => {
  const ul = document.querySelector('ul');
  const sortedArr = [...arr];

  ul.innerHTML = '';
  sortedArr.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedArr.length; i += 1) {
    // Create elements
    const li = document.createElement('li');
    const input = document.createElement('input');
    const checkmark = document.createElement('span');
    const moveBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const moveIcon = document.createElement('img');
    const deleteIcon = document.createElement('img');

    // Update indexes
    sortedArr[i].index = i + 1;

    // Configure elements

    if (sortedArr[i].completed === true) {
      checkmark.classList.add('checked');
    }
    input.value = `${sortedArr[i].description}`;
    moveIcon.src = dragIcon;
    deleteIcon.src = binIcon;
    deleteBtn.classList.add('hidden');
    checkmark.classList.add('checkmark');

    // Append elements

    moveBtn.appendChild(moveIcon);
    deleteBtn.appendChild(deleteIcon);
    li.appendChild(checkmark);
    li.appendChild(input);
    li.appendChild(deleteBtn);
    li.appendChild(moveBtn);
    ul.appendChild(li);

    // Event listeners

    deleteBtn.addEventListener('click', () => {
      deleteTask(arr, i);
    });

    input.addEventListener('click', () => {
      document.querySelectorAll('li').forEach((element) => {
        element.classList.remove('on-edit');
      });
      li.classList.add('on-edit');
      checkmark.classList.add('darken');
      moveBtn.classList.add('hidden');
      deleteBtn.classList.remove('hidden');
    });

    input.addEventListener('blur', () => {
      document.querySelectorAll('li').forEach((element) => {
        element.classList.remove('on-edit');
      });
      checkmark.classList.remove('darken');
      setTimeout(() => {
        deleteBtn.classList.add('hidden');
        moveBtn.classList.remove('hidden');
      }, 500);
    });

    input.addEventListener('keyup', () => updateInput(sortedArr, i, input));

    checkmark.addEventListener('click', () => updateStatus(checkmark, sortedArr, i));
  }
};

export default renderList;