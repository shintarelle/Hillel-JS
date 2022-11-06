// сделать используя только js приложение Todo list
// моя версия

const inputRef = document.createElement('input');
inputRef.placeholder = "enter text";
inputRef.setAttribute('autofocus', 'autofocus');

const buttonAdd = document.createElement('button');
buttonAdd.innerText = 'Add';
buttonAdd.addEventListener('click', addToDoItem);

const buttonClearAll = document.createElement('button');
buttonClearAll.innerText = 'Clear all';
buttonClearAll.addEventListener('click', clearALL);

const toDoList = document.createElement('ul');

const divForToDoList = document.getElementById('divtoDoList');
divForToDoList.append(inputRef);
divForToDoList.append(buttonAdd);
divForToDoList.append(buttonClearAll);
divForToDoList.append(toDoList);


function addToDoItem() {

  if (inputRef.value) {
    const text = inputRef.value;
    createToDoItem(text);

    inputRef.value = '';
  }
}

function clearALL() {
  toDoList.innerHTML = '';
}

function createToDoItem(text) {
  const item = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  item.append(checkbox);
  checkbox.addEventListener('click', checkedToDoItem);

  const span = document.createElement('span');
  span.innerText = text;
  item.append(span);

  const buttonEdit = document.createElement('button');
  buttonEdit.innerText = 'Edit';
  item.append(buttonEdit);
  buttonEdit.addEventListener('click', editToDoItem);

  const buttonRemove = document.createElement('button');
  buttonRemove.innerText = 'Remove';
  item.append(buttonRemove);
  buttonRemove.addEventListener('click', removeToDoItem);

  const input = document.createElement('input');
  input.value = text;
  item.append(input);
  input.style.display = 'none';

  const buttonSave = document.createElement('button');
  buttonSave.innerText = 'Save';
  item.append(buttonSave);
  buttonSave.addEventListener('click', saveToDoItem);
  buttonSave.style.display = 'none';

  const buttonCancel = document.createElement('button');
  buttonCancel.innerText = 'Cancel';
  item.append(buttonCancel);
  buttonCancel.addEventListener('click', cancel);
  buttonCancel.style.display = 'none';

    toDoList.append(item);

    return item;
}

function editToDoItem(event) {

  showEditableToDoElements(event)
}


function removeToDoItem(event) {

  event.target.parentElement.remove();
}


function saveToDoItem(event) {
  const text = event.target.previousElementSibling.value; // input

  if (text != '') {

    event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText = text; // span

    showToDoElements(event);
  }
}

function cancel(event) {

  showToDoElements(event);
  event.target.previousElementSibling.previousElementSibling.value = event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText; //input = span

}

function checkedToDoItem(event) {

  event.target.nextElementSibling.classList.toggle('checked');

}

function showToDoElements(event) {

  event.target.parentElement.firstChild.style.display = '';
  event.target.parentElement.firstChild.nextElementSibling.style.display = '';
  event.target.parentElement.firstChild.nextElementSibling.nextElementSibling.style.display = '';
  event.target.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = '';
  event.target.parentElement.lastChild.style.display = 'none';
  event.target.parentElement.lastChild.previousElementSibling.style.display = 'none';
  event.target.parentElement.lastChild.previousElementSibling.previousElementSibling.style.display = 'none';

}

function showEditableToDoElements(event) {

  event.target.parentElement.firstChild.style.display = 'none';
  event.target.parentElement.firstChild.nextElementSibling.style.display = 'none';
  event.target.parentElement.firstChild.nextElementSibling.nextElementSibling.style.display = 'none';
  event.target.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
  event.target.parentElement.lastChild.style.display = '';
  event.target.parentElement.lastChild.previousElementSibling.style.display = '';
  event.target.parentElement.lastChild.previousElementSibling.previousElementSibling.style.display = '';

}
