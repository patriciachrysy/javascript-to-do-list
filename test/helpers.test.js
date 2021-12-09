import changeStatus from '../src/helpers.js';


describe('Testing that the status of a task is changed', () => {
    let task = {
        description: 'Do the dishes',
        completed: false,
        index: 0
    }

    test('mark the task as completed', () => {
        task = changeStatus(task);
        expect(task.completed).toBeTruthy();
    })
})