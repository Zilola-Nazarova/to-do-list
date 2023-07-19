jest.mock('./render-list.js');
import addTask from './add-item.js';

describe('add to empty array', () => {
  test('should create a new object with correct property values', () => {
    // arrange
    const arryOfTasks = [];
    const description = 'Setup linters';
    document.body.innerHTML = 
    '<div>' +
    '<input id="add-task">' +
    '<ul>' +
    '</ul>' +
    '</div>';
    // act
    addTask(description, arryOfTasks);
    // assert
    expect(arryOfTasks).toMatchObject([{description: 'Setup linters',
    completed: false,
    index: 1}]);
  });

  test('should add exactly one <li> element to the list in the DOM', () => {
    // arrange

    // act

    // assert

  });
});

describe('add to existing array', () => {
  test('should append a new object with correct properties to the end of the array', () => {
    // arrange

    // act

    // assert

  });

  test('should add exactly one <li> element to the list in the DOM', () => {
    // arrange

    // act

    // assert

  });
});