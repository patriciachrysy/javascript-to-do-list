export const addTask = (description, taskList) => {
  const taskIndex = taskList.length;

  const task = {
    description,
    completed: false,
    index: taskIndex,
  };

  taskList.push(task);

  return taskList;
};

export const editTask = (description, taskIndex, taskList) => {
  let theTask = null;
  let taskPosition = null;
  taskList.map((task, pos) => {
    if (task.index === parseInt(taskIndex, 10)) {
      theTask = task;
      taskPosition = pos;
    }
    return 0;
  });

  theTask.description = description;
  taskList[taskPosition] = theTask;

  return taskList;
};

export const deleteTask = (taskIndex, taskList) => {
  taskList = taskList.filter((task) => task.index !== parseInt(taskIndex, 10));

  taskList.map((task, pos) => {
    task.index = pos;
    return 0;
  });

  return taskList;
};

export const clearCompletedTasks = (taskList) => {
  taskList = taskList.filter((task) => task.completed !== true);

  taskList.map((task, pos) => {
    task.index = pos;
    return 0;
  });

  return taskList;
};