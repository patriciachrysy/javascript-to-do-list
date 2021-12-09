import {editTask, clearCompletedTasks} from '../src/taskActionsHelper.js';


describe('Testing that a task can be edited', () => {
    let taskList = [{
        description: 'Do the dishes',
        completed: true,
        index: 0
    },{
        description: 'Clean the house',
        completed: false,
        index: 1
    }];

    test('Add some precisions to the second task description', () => {
        taskList = editTask('Clean grandma\'s house', 1, taskList);
        expect(taskList[1].description).toEqual('Clean grandma\'s house');
    })
})