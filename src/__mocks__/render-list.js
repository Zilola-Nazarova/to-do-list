const renderList = (arr) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
​
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
    const li = document.createElement('li');
    ul.appendChild(li);
  }
}
​
export default renderList;