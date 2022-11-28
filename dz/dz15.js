//?--------------------25 Local Storage----------------
// туду лист должен остаться в том состоянии в котором был после выхода из приложения

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

// clearLocalStorage();
getDataOfLocalStorage();


function saveToLocalStorage() {
  localStorage.clear();
  state.forEach((s) => {

    let index = state.findIndex(item => item == s)
      // console.log('index--->', index);
      let key = JSON.stringify(index);
      // console.log('key--->', key);
      let value = JSON.stringify(state[key]);
      // console.log('value-->>', value)

      localStorage.setItem(key, value);

  })

}

function getDataOfLocalStorage() {

  for (i = 0; i < localStorage.length; i++) {

    state.push(JSON.parse(localStorage.getItem(i)));
  }
  renderLi();
}

function addToDoItem() {

  if (inputRef.value) {

    state.push ({
      text: inputRef.value,
      checked: false,
      editable: false,
      id: new Date()
    })

    // console.log('add state', state)

    inputRef.value = '';

    renderLi();
  }
}

function renderLi() {

  toDoList.innerHTML = '';

  state.forEach((s) => {
    const item = createToDoItem(s);
    toDoList.append(item);

    saveToLocalStorage()

  })

// console.log('render state', state)
}

function clearALL() {
  toDoList.innerHTML = '';
  state.length = 0;
  console.log(state);

  saveToLocalStorage()
}


function removeToDoItem(event) {

  const liObj = findObjbyEvent(event);
  const index = state.findIndex(s => s === liObj);
  // console.log(index);
  state.splice(index, 1);
  console.log(state);

  renderLi();
  saveToLocalStorage()
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
  saveToLocalStorage()
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

  const liObj = findObjbyEvent(event);
  liObj.editable = true;

  console.log('liObj' ,liObj);

  const newItem = createEditableToDoItem(liObj)
  event.target.parentElement.parentElement.replaceChild(newItem, event.target.parentElement);

  saveToLocalStorage()
}

function saveToDoItem(event) {

  const liObj = findObjbyEvent(event);
  console.log('liObj.text', liObj.text);

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
