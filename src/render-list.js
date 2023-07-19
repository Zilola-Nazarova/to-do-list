import deleteTask from "./delete-item.js";
import drag_icon from './icons/drag-handle-minor-svgrepo-com.svg';
import bin_icon from './icons/bin-svgrepo-com.svg';

const renderList = (arr) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortedArr.length; i += 1) {
    sortedArr[i].index = i + 1;
    const li = document.createElement('li');
    // const label = document.createElement('label');
    const input = document.createElement('input');

    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');
    if (sortedArr[i].completed === true) {
      checkmark.classList.add('checked');
    }

    const moveBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    const moveIcon = document.createElement('img');
    moveIcon.src = drag_icon;
    moveBtn.appendChild(moveIcon);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = bin_icon;
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.classList.add('hidden');

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
      setTimeout(() => {
        deleteBtn.classList.add('hidden');
        moveBtn.classList.remove('hidden');
      }, 500);
    });

    li.appendChild(checkmark);
    li.appendChild(input);
    input.value = `${sortedArr[i].description}`;
    input.addEventListener('keyup', () => {
      sortedArr[i].description = input.value;
      localStorage.setItem('To-Do List', JSON.stringify(sortedArr));
    });
    li.appendChild(deleteBtn);
    li.appendChild(moveBtn);
    ul.appendChild(li);

    checkmark.addEventListener('click', () => {
      checkmark.classList.toggle('checked');
      if (checkmark.classList.contains('checked')) {
        sortedArr[i].completed = true;
      } else {
        sortedArr[i].completed = false;
      }
      localStorage.setItem('To-Do List', JSON.stringify(sortedArr));
    });
  }
}

export default renderList;