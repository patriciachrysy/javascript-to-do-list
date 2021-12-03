export const dragUp = (prevIndex, newIndex, taskList) => {
  taskList.map((task) => {
    if (task.index === parseInt(prevIndex, 10)) {
      task.index = parseInt(newIndex, 10);
    } else if (task.index >= newIndex && task.index < prevIndex) {
      task.index += 1;
    }
    return 0;
  });
  return taskList;
};

export const dragDown = (prevIndex, newIndex, taskList) => {
  taskList.map((task) => {
    if (task.index === parseInt(prevIndex, 10)) {
      task.index = parseInt(newIndex, 10);
    } else if (task.index <= newIndex && task.index > prevIndex) {
      task.index -= 1;
    }
    return 0;
  });
  return taskList;
};
