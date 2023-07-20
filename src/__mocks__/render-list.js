import updateInput from '../update-input.js';
import updateStatus from '../update-status.js';

const renderList = (arr) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  for (let i = 0; i < arr.length; i += 1) {
    const ul = document.querySelector('ul');
    const sortedArr = [...arr];
    const li = document.createElement('li');
    const input = document.createElement('input');
    const checkmark = document.createElement('span');

    arr[i].index = i + 1;
    if (sortedArr[i].completed === true) {
      checkmark.classList.add('checked');
    }
    input.value = `${sortedArr[i].description}`;
    checkmark.classList.add('checkmark');

    li.appendChild(checkmark);
    li.appendChild(input);
    ul.appendChild(li);

    input.addEventListener('keyup', () => updateInput(sortedArr, i, input));
    checkmark.addEventListener('click', () => updateStatus(checkmark, sortedArr, i));
  }
};

export default renderList;