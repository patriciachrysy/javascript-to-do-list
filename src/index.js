import './style.css';

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
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const titleDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.innerText = "Today's To Do";
    titleDiv.appendChild(title);
    containerDiv.appendChild(titleDiv);

    for(const task of sortedTasks) {
        const div = document.createElement('div');
        div.innerText = task.description;
        containerDiv.appendChild(div);
    };

    const footerDiv = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = "Clear all completed";
    footerDiv.appendChild(button);
    containerDiv.appendChild(footerDiv);

    return containerDiv;
}

window.onload = () => {
    const placeholder = document.querySelector('#to-do-list');
    placeholder.classList.add('wrapper');

    placeholder.appendChild(listTasks());
};