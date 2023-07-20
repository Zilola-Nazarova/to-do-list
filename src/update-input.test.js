import updateInput from './update-input.js';

describe('to update already inserted item to discription', () => {
  test('Should update discription', () => {
    // arrange
    const arryOfTasks = [
      {
        description: 'Submit the project',
        completed: false,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: true,
        index: 2,
      },
      {
        description: 'Setup linters',
        completed: false,
        index: 3,
      },
    ];
    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><input><li/>'
    + '  <li><input><li/>'
    + '  <li><input><li/>'
    + '  </ul>'
    + '</div>';
    const position = 0;
    const allInputs = document.querySelectorAll('input');
    const givenInputs = allInputs[position];
    givenInputs.value = 'Go for a Walk';

    // act
    updateInput(arryOfTasks, position, givenInputs);

    // assert
    expect(arryOfTasks[position].description).toBe('Go for a Walk');
  });

  test('should update localStorage', () => {
    // arrange
    const arrayOfTasks = [
      {
        description: 'Peer-to-peer review',
        completed: false,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: true,
        index: 2,
      },
    ];
    const position = 0;
    document.body.innerHTML = '<div>'
    + '  <input id="add-task">'
    + '  <ul id="list">'
    + '  <li><input /></li>'
    + '  </ul>'
    + '</div>';
    const givenInput = document.querySelector('input');
    givenInput.value = 'Peer-to-peer review (2x)';

    // act
    updateInput(arrayOfTasks, position, givenInput);
    const result = JSON.parse(localStorage.getItem('To-Do List'));

    // assert
    expect(result).toMatchObject([
      {
        description: 'Peer-to-peer review (2x)',
        completed: false,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: true,
        index: 2,
      },
    ]);
  });
});