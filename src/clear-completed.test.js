import clearCompleted from "./clear-completed";

jest.mock('./render-list.js');

describe('should clear a Tasklist of the all completed Tasks', () => {

  test('should clear from some completed tasks', () => {
    // arrange
    const arrayOfTasks = [
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
    + '  <li><li/>'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';

    // act
    clearCompleted(arrayOfTasks);
    const result = JSON.parse(localStorage.getItem('To-Do List'));

    // assert
    expect(result).toMatchObject([
      {
        description: 'Submit the project',
        completed: false,
        index: 1,
      },
      {
        description: 'Setup linters',
        completed: false,
        index: 2,
      },
    ]);

  });

  test('should clear from all tasks and output an empty array', () => {
    // arrange
    const arrayOfTasks = [
      {
        description: 'Submit the project',
        completed: true,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: true,
        index: 2,
      },
      {
        description: 'Setup linters',
        completed: true,
        index: 3,
      },
    ];
    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';

    // act
    clearCompleted(arrayOfTasks);
    const result = JSON.parse(localStorage.getItem('To-Do List'));

    // assert
    expect(result).toMatchObject([]);

  });

  test('should leave all the tasks untouched', () => {
    // arrange
    const arrayOfTasks = [
      {
        description: 'Submit the project',
        completed: false,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: false,
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
    + '  <li><li/>'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';

    // act
    clearCompleted(arrayOfTasks);
    const result = JSON.parse(localStorage.getItem('To-Do List'));

    // assert
    expect(result).toMatchObject([
      {
        description: 'Submit the project',
        completed: false,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: false,
        index: 2,
      },
      {
        description: 'Setup linters',
        completed: false,
        index: 3,
      },
    ]);

  });

});

describe('should display the correct number of <li> elements', () => {

  test('should delete some <li> elements', () => {
    // arrange
    const arrayOfTasks = [
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
    + '  <li><li/>'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';

    // act
    clearCompleted(arrayOfTasks);
    const listItems = document.querySelectorAll('li');
    // assert
    expect(listItems).toHaveLength(2);

  });

  test('edge case, should delete all <li> elements', () => {
    // arrange
    const arrayOfTasks = [
      {
        description: 'Submit the project',
        completed: true,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: true,
        index: 2,
      },
      {
        description: 'Setup linters',
        completed: true,
        index: 3,
      },
    ];
    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';

    // act
    clearCompleted(arrayOfTasks);
    const listItems = document.querySelectorAll('li');

    // assert
    console.log(listItems);
    expect(listItems).toHaveLength(0);

  });

  test('edge case, should leave all <li> elements untouched', () => {
    // arrange
    const arrayOfTasks = [
      {
        description: 'Submit the project',
        completed: false,
        index: 1,
      },
      {
        description: 'Call a mentor',
        completed: false,
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
    + '  <li><li/>'
    + '  <li><li/>'
    + '  <li><li/>'
    + '  </ul>'
    + '</div>';
    // act
    clearCompleted(arrayOfTasks);
    const listItems = document.querySelectorAll('li');
    // assert
    expect(listItems).toHaveLength(3);

  });

})