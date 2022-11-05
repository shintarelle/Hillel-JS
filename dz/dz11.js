// сделать используя только js приложение Todo list

// функционал:

// добавлять новый айтем
// редактировать айтем
// удалять айтем
// ставить статус (чекбокс )
// удалить всё
// небольшую валидацию по усмотрению (низя спецсимволы вводить)
// дизайн прикреплён ниже

const state = [];

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

const divForToDoList = document.getElementById('toDoList');
divForToDoList.append(inputRef);
divForToDoList.append(buttonAdd);
divForToDoList.append(buttonClearAll);
divForToDoList.append(toDoList);

// let uPattern = /^[a-zA-Z0-9_-]{4,50}$/;

function addToDoItem() {

  if (inputRef.value) {
    state.push({
    text: inputRef.value,
    checked: false,
    editable: false,
    id: new Date(),
    })

    inputRef.value = '';

    renderLi();
  }
}

function renderLi() {

  toDoList.innerHTML = '';

  state.forEach((s) => {
    const item = createToDoItem(s);
    toDoList.append(item);
  })
}

function clearALL() {
  toDoList.innerHTML = '';
  state.length = 0;
  console.log(state);
}


function removeToDoItem(event) {

  // const index = state.findIndex(s => s.id.toString() == event.target.parentElement.dataset.id);
  const liObj = findObjbyEvent(event);
  const index = state.findIndex(s => s === liObj);
  // console.log(index);
  state.splice(index, 1);
  // console.log(state);

  // event.target.parentElement.remove();

  renderLi();
}

function createToDoItem(liObj) {
    const item = document.createElement('li');
    item.dataset.id = liObj.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (liObj.checked == true) {
      checkbox.checked = 'checked';
    }
    item.append(checkbox);
    checkbox.addEventListener('click', checkedToDoItem);

    const span = document.createElement('span');
    span.innerText = liObj.text;
    if (liObj.checked == true) {
      span.classList.toggle('checked')
    }
    item.append(span);

    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Edit';
    item.append(buttonEdit);
    buttonEdit.addEventListener('click', editToDoItem);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerText = 'Remove';
    item.append(buttonRemove);
    buttonRemove.addEventListener('click', removeToDoItem);

    toDoList.append(item);
    // console.log('liObj.text', liObj.text)

    return item;
}

function checkedToDoItem(event) {
  const liObj = findObjbyEvent(event);
  event.target.nextElementSibling.classList.toggle('checked');

  if (liObj.checked == false) {
    liObj.checked = true;
    console.log('liObj.checked', liObj.checked);

  } else {
    liObj.checked = false;
    console.log('liObj.checked', liObj.checked);

  }

}


function createEditableToDoItem(liObj) {
  const item = document.createElement('li');
  item.dataset.id = liObj.id;

  const input = document.createElement('input');
  input.value = liObj.text;
  item.append(input);

  const buttonSave = document.createElement('button');
  buttonSave.innerText = 'Save';
  item.append(buttonSave);
  buttonSave.addEventListener('click', saveToDoItem)

  const buttonCancel = document.createElement('button');
  buttonCancel.innerText = 'Cancel';
  item.append(buttonCancel);
  buttonCancel.addEventListener('click', cancel)

  return item;
}

function editToDoItem(event) {

  // const liObj = state.find(s => s.id.toString() == event.target.parentElement.dataset.id);
  const liObj = findObjbyEvent(event);
  liObj.editable = true;

  console.log('liObj' ,liObj);

  const newItem = createEditableToDoItem(liObj)
  event.target.parentElement.parentElement.replaceChild(newItem, event.target.parentElement);
}

function saveToDoItem(event) {
  // const liObj = state.find(s => s.id.toString() == event.target.parentElement.dataset.id);
  const liObj = findObjbyEvent(event);
  console.log('liObj.text', liObj.text);

  // console.dir(event.target.previousElementSibling.value)
  if (event.target.previousElementSibling.value != '') {
    liObj.text = event.target.previousElementSibling.value;
    liObj.editable = false;
    renderLi();
  }

}

function cancel(event) {
  const liObj = findObjbyEvent(event);
  liObj.editable = false;
  renderLi();
}


function findObjbyEvent(event) {
  const liObj = state.find(s => s.id.toString() == event.target.parentElement.dataset.id);
  return liObj;
}
