import './style.css';
import updateTaskStatus from './helpers.js';
import dragTask from './dragHelper.js';
import {dragUp, dragDown} from './dragHelper';

if (!localStorage.getItem('TaskList')) {
  const initTaskList = [
    {
      description: 'Example task zero',
      completed: false,
      index: 0,
    },
    {
      description: 'Example task five',
      completed: false,
      index: 5,
    },
    {
      description: 'Example task one',
      completed: true,
      index: 1,
    },
    {
      description: 'Example task eight',
      completed: false,
      index: 8,
    },
  ];

  localStorage.setItem('TaskList', JSON.stringify(initTaskList));
}

let toDoTasks = JSON.parse(localStorage.getItem('TaskList') || '[]');
let draggingIndex = null;

const placeholder = document.querySelector('#to-do-list');
placeholder.classList.add('wrapper');

const displayTask = (task) => {
  const divTask = document.createElement('div');
  divTask.setAttribute('data-index', task.index);
  divTask.draggable = true;

  const radio = document.createElement('input');
  radio.setAttribute('type', 'checkbox');
  radio.setAttribute('data-id', task.index);

  const textField = document.createElement('input');
  textField.setAttribute('type', 'text');
  textField.setAttribute('value', task.description);
  if (task.completed) {
    radio.setAttribute('checked', 'checked');
    textField.classList.add('crossed');
  }

  radio.addEventListener('change', () => {
    toDoTasks.map((theTask) => {
      if (theTask.index === parseInt(radio.getAttribute('data-id'), 10)) {
        theTask = updateTaskStatus(theTask);
      }
      return 0;
    });
    localStorage.setItem('TaskList', JSON.stringify(toDoTasks));

    if (task.completed) {
      textField.classList.add('crossed');
    } else {
      textField.classList.remove('crossed');
    }
  });

  const dragButton = document.createElement('button');
  dragButton.classList.add('dot-button');

  divTask.appendChild(radio);
  divTask.appendChild(textField);
  divTask.appendChild(dragButton);

  textField.addEventListener('focusin', () => {
    divTask.classList.add('editing');
  });

  textField.addEventListener('focusout', () => {
    divTask.classList.remove('editing');
  });

  divTask.addEventListener('drag', () => {
    draggingIndex = divTask.getAttribute('data-index');
    divTask.classList.add('dragging');
  });

  divTask.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  divTask.addEventListener('drop', () => {
    let newIndex = divTask.getAttribute('data-index');
    console.log(draggingIndex);
    console.log(newIndex);
    if(newIndex > draggingIndex) {
      toDoTasks = dragDown(draggingIndex, newIndex, toDoTasks);
    }else if(newIndex < draggingIndex) {
      toDoTasks = dragUp(draggingIndex, newIndex, toDoTasks);
    }
    console.log(toDoTasks);
    localStorage.setItem('TaskList', JSON.stringify(toDoTasks));
    listTasks();
  });

  divTask.addEventListener('dragend', () => {
    let prevDiv = document.querySelector('.dragging');
    if(prevDiv) {
      prevDiv.classList.remove('dragging');
    }
  });
  


  return divTask;
};

const displayForm = () => {
  const formDiv = document.createElement('div');
  const form = document.createElement('form');
  const taskTextField = document.createElement('input');
  taskTextField.setAttribute('type', 'text');
  taskTextField.setAttribute('placeholder', 'Add to your list...');

  form.appendChild(taskTextField);

  const submitButton = document.createElement('button');
  submitButton.classList.add('enter-button');

  form.appendChild(submitButton);

  formDiv.appendChild(form);

  return formDiv;
};

const listTasks = () => {
  const sortedTasks = toDoTasks.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    } if (a.index < b.index) {
      return -1;
    }
    return 0;
  });
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const titleDiv = document.createElement('div');
  const title = document.createElement('h1');
  title.innerText = "Today's To Do";
  titleDiv.appendChild(title);
  containerDiv.appendChild(titleDiv);

  containerDiv.appendChild(displayForm());

  sortedTasks.map((task) => containerDiv.appendChild(displayTask(task)));

  const footerDiv = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Clear all completed';
  footerDiv.appendChild(button);
  containerDiv.appendChild(footerDiv);
  
  placeholder.innerHTML = '';
  placeholder.appendChild(containerDiv);
};

window.onload = () => {
  listTasks();
};