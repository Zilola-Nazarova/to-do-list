import _ from 'lodash';
import './style.css';
import Drag from './drag-handle-minor-svgrepo-com.svg';

const listName = "Today's To Do";
const tasksArray = [
  {
    description: 'Read an article on Webpack',
    completed: true,
    index: 0,
  },
  {
    description: 'Create an index.js file',
    completed: true,
    index: 3,
  },
  {
    description: 'Setup the Webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'Create an index.html file',
    completed: true,
    index: 2,
  },
  {
    description: 'Add styles to the project',
    completed: false,
    index: 5,
  },
  {
    description: 'Display the list',
    completed: true,
    index: 4,
  },
]

