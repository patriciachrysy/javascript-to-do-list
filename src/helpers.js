export default (task) => {
  task.completed = !task.completed;
  return task;
};