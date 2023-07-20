import updateStatus from './update-status.js';

describe('should add/remove class from an HTML element', () => {
  test('should add class "checked" to a <span> element at a given position', () => {
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

    const position = 0;

    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><span><li/>'
    + '  <li><span class="checked"><li/>'
    + '  <li><span><li/>'
    + '  </ul>'
    + '</div>';

    const allCheckmarks = document.querySelectorAll('span');
    const givenCheckmark = allCheckmarks[position];

    // act
    updateStatus(givenCheckmark, arrayOfTasks, position);
    // assert
    expect(givenCheckmark.classList.contains('checked')).toBe(true);
  });

  test('should remove class "checked" from a <span> element at a given position', () => {
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

    const position = 1;

    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><span><li/>'
    + '  <li><span class="checked"><li/>'
    + '  <li><span><li/>'
    + '  </ul>'
    + '</div>';

    const allCheckmarks = document.querySelectorAll('span');
    const givenCheckmark = allCheckmarks[position];

    // act
    updateStatus(givenCheckmark, arrayOfTasks, position);
    // assert
    expect(givenCheckmark.classList.contains('checked')).toBe(false);
  });
});

describe('should change completed attribute of the task at the given position', () => {
  test('should change completed attribute to true of the task at the given position', () => {
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

    const position = 0;

    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><span><li/>'
    + '  <li><span class="checked"><li/>'
    + '  <li><span><li/>'
    + '  </ul>'
    + '</div>';

    const allCheckmarks = document.querySelectorAll('span');
    const givenCheckmark = allCheckmarks[position];

    // act
    updateStatus(givenCheckmark, arrayOfTasks, position);
    // assert
    expect(arrayOfTasks[position].completed).toBe(true);
  });

  test('should change completed attribute to false of the task at the given position', () => {
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

    const position = 1;

    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><span><li/>'
    + '  <li><span class="checked"><li/>'
    + '  <li><span><li/>'
    + '  </ul>'
    + '</div>';

    const allCheckmarks = document.querySelectorAll('span');
    const givenCheckmark = allCheckmarks[position];

    // act
    updateStatus(givenCheckmark, arrayOfTasks, position);
    // assert
    expect(arrayOfTasks[position].completed).toBe(false);
  });
});

describe('should update localStorage', () => {
  test('should change completed attribute to true of the object at position 0', () => {
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

    const position = 0;

    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><span><li/>'
    + '  <li><span class="checked"><li/>'
    + '  <li><span><li/>'
    + '  </ul>'
    + '</div>';

    const allCheckmarks = document.querySelectorAll('span');
    const givenCheckmark = allCheckmarks[position];

    // act
    updateStatus(givenCheckmark, arrayOfTasks, position);
    const updatedLocalStorage = JSON.parse(localStorage.getItem('To-Do List'));
    // assert
    expect(updatedLocalStorage[position].completed).toBe(true);
  });

  test('should change completed attribute to false of the object at position 1', () => {
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

    const position = 1;

    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '  <li><span><li/>'
    + '  <li><span class="checked"><li/>'
    + '  <li><span><li/>'
    + '  </ul>'
    + '</div>';

    const allCheckmarks = document.querySelectorAll('span');
    const givenCheckmark = allCheckmarks[position];

    // act
    updateStatus(givenCheckmark, arrayOfTasks, position);
    const updatedLocalStorage = JSON.parse(localStorage.getItem('To-Do List'));

    // assert
    expect(updatedLocalStorage[position].completed).toBe(false);
  });
});