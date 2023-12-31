import addTask from './add-item.js';

jest.mock('./render-list.js');

describe('add to empty array', () => {
  test('should create a new object with correct property values', () => {
    // arrange
    const arryOfTasks = [];
    const description = 'Setup linters';
    document.body.innerHTML = '<div>'
    + '  <input id="add-task">'
    + '  <ul id="list">'
    + '  </ul>'
    + '</div>';
    // act
    addTask(description, arryOfTasks);
    // assert
    expect(arryOfTasks).toMatchObject([
      {
        description: 'Setup linters',
        completed: false,
        index: 1,
      },
    ]);
  });

  test('should add exactly one <li> element to the list in the DOM', () => {
    // arrange
    const arrayOfTasks = [];
    const description = 'Setup linters';
    document.body.innerHTML = '<div>'
    + '  <input id="add-task">'
    + '  <ul id="list">'
    + '  </ul>'
    + '</div>';
    // act
    addTask(description, arrayOfTasks);
    // assert
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(1);
  });
});

describe('add to existing array', () => {
  test('should append a new object with correct properties to the end of the array', () => {
    // arrange
    const arrayOfTasks = [
      {
        description: 'Call a mentor',
        completed: true,
        index: 1,
      },
    ];
    const description = 'Setup linters';
    // act
    addTask(description, arrayOfTasks);
    // assert
    expect(arrayOfTasks).toMatchObject([
      {
        description: 'Call a mentor',
        completed: true,
        index: 1,
      },
      {
        description: 'Setup linters',
        completed: false,
        index: 2,
      },
    ]);
  });

  test('should add exactly one <li> element to the list in the DOM', () => {
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
    const description = 'Setup linters';
    document.body.innerHTML = '<div>'
    + '  <input id="add-task">'
    + '  <ul id="list">'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';
    // act
    addTask(description, arrayOfTasks);
    // assert
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(3);
  });
});