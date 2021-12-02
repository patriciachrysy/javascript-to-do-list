export const dragUp = (prevIndex, newIndex, taskList) => {
    taskList.map((task) => {
        if(task.index === parseInt(prevIndex)) {
            task.index = parseInt(newIndex);
        }else if(task.index >= newIndex && task.index < prevIndex) {
            task.index = task.index + 1;
        }
    });
    return taskList;
}

export const dragDown = (prevIndex, newIndex, taskList) => {
    taskList.map((task) => {
        if(task.index === parseInt(prevIndex)) {
            task.index = parseInt(newIndex);
        }else if(task.index <= newIndex && task.index > prevIndex) {
            task.index = task.index - 1;
        }
    });
    return taskList;
}
