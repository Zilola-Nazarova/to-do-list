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

export default renderList;