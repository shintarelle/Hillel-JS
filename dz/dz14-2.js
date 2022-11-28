//?--------------------ДЗ 26. Доделать Todo List------------------

// Подгрузка данных при захождении на страницу
// Сделать добавление (вначале отправка запроса, потом обновления UI )
// Сделать удаление (вначале отправка запроса, потом обновления UI )
// Сделать обновления данных (вначале отправка запроса, потом обновления UI )
// Поиск по полю text (надо сделать отдельное поле)
// Сортировка по полю id (от меньшего до большего, и на оборот)
// По клику на text отдельно отображать все данные по тудушке (отдельный запрос нужен)

let state = [];
const userId = 1;

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


async function addToDoItem() {

  if (inputRef.value) {
    // state.push({
    // text: inputRef.value,
    // checked: false,
    // editable: false,
    // id: new Date(),
    // })

    const data = await createToDo(inputRef.value);
    if (!data) {
      return;
    }
      state.push(coockedData(data));
      renderLi();

      inputRef.value = '';


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

  const liObj = findObjbyEvent(event);
  const index = state.findIndex(s => s === liObj);

  deleteToDo(state[index].id)
  state.splice(index, 1);

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

    return item;
}

async function checkedToDoItem(event) {
  const liObj = findObjbyEvent(event);
  event.target.nextElementSibling.classList.toggle('checked');

  const res = await updateData(liObj.id, { ...findObjbyEvent, checked: liObj.checked });
  console.log("res", res);

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

  const liObj = findObjbyEvent(event);
  liObj.editable = true;

  console.log('liObj' ,liObj);

  const newItem = createEditableToDoItem(liObj)
  event.target.parentElement.parentElement.replaceChild(newItem, event.target.parentElement);
}

function saveToDoItem(event) {

  const liObj = findObjbyEvent(event);
  console.log('liObj.text', liObj.text);

  if (event.target.previousElementSibling.value != '') {
    liObj.text = event.target.previousElementSibling.value;
    liObj.editable = false;

    const index = state.findIndex(s => s === liObj);
    state[index].text = event.target.previousElementSibling.value;

    updateData(state[index].id)
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

function coockedData(item) {
  return {text: item.title, checked: item.completed, id: item.id, editable: false }
}

function getInitialData() {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  .then(response => response.json())
  .then(json => json.map(coockedData))
  .then(mappedData => state = mappedData)
  .then(() => renderLi())
  .catch(error => console.log(error.message));
}

getInitialData();

function updateData(id, data) {
  // const updatedItem = state.find(item => item.id === id);
  // console.log(updatedItem);
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: data.id,
      title: data.text,
      completed: data.checked,
      userId,

    }),
    headers: {
      'Content-type': 'application/json: charset-UTF-8',
    },
  }).then(data => {
    if (!data.ok) {
      throw new Error(data.status)
    } else {
      return data;
    }
  })
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

}

function deleteToDo(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE"
  })
}


function createToDo(title) {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      completed: false,
      userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(data => {
      if (!data.ok) {
        throw new Error(data.status)
      } else {
        return data;
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))

}
