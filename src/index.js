import './style.css';

const toDoTasks = [
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

const displayTask = (task) => {
  const divTask = document.createElement('div');

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

  radio.addEventListener('click', () => {
    task.completed = !task.completed;
    if (task.completed) {
      textField.classList.add('crossed');
    } else {
      textField.classList.remove('crossed');
    }
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('dot-button');
  divTask.appendChild(radio);
  divTask.appendChild(textField);
  divTask.appendChild(menuButton);

  textField.addEventListener('focusin', () => {
    divTask.classList.add('editing');
  });

  textField.addEventListener('focusout', () => {
    divTask.classList.remove('editing');
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
  const sortedTasks = toDoTasks.sort((a, b) => a.index > b.index);
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const titleDiv = document.createElement('div');
  const title = document.createElement('h1');
  title.innerText = "Today's To Do";
  titleDiv.appendChild(title);
  containerDiv.appendChild(titleDiv);

  containerDiv.appendChild(displayForm());

  // eslint-disable-next-line no-restricted-syntax
  for (const task of sortedTasks) {
    containerDiv.appendChild(displayTask(task));
  }

  const footerDiv = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Clear all completed';
  footerDiv.appendChild(button);
  containerDiv.appendChild(footerDiv);

  return containerDiv;
};

window.onload = () => {
  const placeholder = document.querySelector('#to-do-list');
  placeholder.classList.add('wrapper');

  placeholder.appendChild(listTasks());
};