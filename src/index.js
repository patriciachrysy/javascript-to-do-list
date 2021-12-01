const toDoTasks = [
    {
        description: "Example task zero",
        completed: false,
        index: 0
    },
    {
        description: "Example task five",
        completed: false,
        index: 5
    },
    {
        description: "Example task one",
        completed: false,
        index: 1
    },
    {
        description: "Example task eight",
        completed: false,
        index: 8
    }
]

const listTasks = () => {
    let sortedTasks = toDoTasks.sort((a, b) => {return a.index > b.index});
    let htmlSortedTasks = [];

    for(const task of sortedTasks) {
        const div = document.createElement('div');
        div.innerText = task.description;
        htmlSortedTasks.push(div);
    }

    return htmlSortedTasks;
}

window.onload = () => {
    const placeholder = document.querySelector('#to-do-list');
    for(const element of listTasks()) {
        placeholder.appendChild(element);
    }
};