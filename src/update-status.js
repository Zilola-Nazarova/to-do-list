const updateStatus = (checkmark, sortedArr, i) => {
  checkmark.classList.toggle('checked');
  if (checkmark.classList.contains('checked')) {
    sortedArr[i].completed = true;
  } else {
    sortedArr[i].completed = false;
  }
  localStorage.setItem('To-Do List', JSON.stringify(sortedArr));
};

export default updateStatus;