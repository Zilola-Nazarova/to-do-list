class TaskObject {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index + 1;
  }
}

export default TaskObject;