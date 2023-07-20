const updateInput = (sortedArr, i, input) => {
  sortedArr[i].description = input.value;
  localStorage.setItem('To-Do List', JSON.stringify(sortedArr));
};

export default updateInput;
