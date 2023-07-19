import deleteTask from './delete-item.js';

jest.mock('./render-list.js');

describe('delete from array of objects', () => {
  test('should delete and object at a given position', () => {
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
    const position = 1;
    document.body.innerHTML = '<div>'
    + '  <input id="add-task">'
    + '  <ul id="list">'
    + '  </ul>'
    + '</div>';
    // act
    deleteTask(arrayOfTasks, position);
    // assert
    expect(arrayOfTasks).toMatchObject([
      {
        description: 'Peer-to-peer review',
        completed: false,
        index: 1,
      },
    ]);
  });

  test('edge case when position is 0, should delete first object and update index', () => {
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
    + '  </ul>'
    + '</div>';
    // act
    deleteTask(arrayOfTasks, position);
    // assert
    expect(arrayOfTasks).toMatchObject([
      {
        description: 'Call a mentor',
        completed: true,
        index: 1,
      },
    ]);
  });

  test('should leave the array untouched when position is greater than the length of the array', () => {
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
    const position = 2;
    document.body.innerHTML = '<div>'
    + '  <input id="add-task">'
    + '  <ul id="list">'
    + '  </ul>'
    + '</div>';
    // act
    deleteTask(arrayOfTasks, position);
    // assert
    expect(arrayOfTasks).toMatchObject([
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
    ]);
  });
});
