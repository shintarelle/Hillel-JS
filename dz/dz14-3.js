// туду лист с тудушками с сервера (Сашина реализация)

//?--------------------ДЗ 26. Доделать Todo List------------------

// Подгрузка данных при захождении на страницу
// Сделать добавление (вначале отправка запроса, потом обновления UI )
// Сделать удаление (вначале отправка запроса, потом обновления UI )
// Сделать обновления данных (вначале отправка запроса, потом обновления UI )
// Поиск по полю text (надо сделать отдельное поле)
// Сортировка по полю id (от меньшего до большего, и на оборот)
// По клику на text отдельно отображать все данные по тудушке (отдельный запрос нужен)

const userId = 1;

let state = [];

const inputRef = document.createElement('input');
inputRef.placeholder = "enter text";
inputRef.setAttribute('autofocus', 'autofocus');

const buttonAdd = document.createElement('button');
buttonAdd.innerText = 'Add';
buttonAdd.addEventListener('click', addToDoItem);

const buttonClearAll = document.createElement('button');
buttonClearAll.innerText = 'Clear all';
buttonClearAll.addEventListener('click', clearALL);


const inputSearch = document.createElement('input');
inputSearch.placeholder = "search text";
inputSearch.oninput = deleteSymbol;
const buttonSearch = document.createElement('button');
buttonSearch.innerText = 'Search';
buttonSearch.addEventListener('click', searchToDoItem);

const sortBtnMin = document.createElement('input');
sortBtnMin.type = 'radio';
sortBtnMin.name = 'min-max';
sortBtnMin.id = 'min';
const labelMin = document.createElement('label');
labelMin.innerHTML = 'sort min';
sortBtnMin.oninput = sortByMin;


const sortBtnMax = document.createElement('input');
sortBtnMax.type = 'radio';
sortBtnMax.name = 'min-max';
sortBtnMax.id = 'max';
const labelMax = document.createElement('label');
labelMax.innerHTML = 'sort max';
sortBtnMax.oninput = sortByMax;


const toDoList = document.createElement('ul');

const divForToDoList = document.getElementById('toDoList');
divForToDoList.append(inputRef);
divForToDoList.append(buttonAdd);
divForToDoList.append(buttonClearAll);
divForToDoList.append(inputSearch);
divForToDoList.append(buttonSearch);
divForToDoList.append(sortBtnMin);
divForToDoList.append(labelMin);
divForToDoList.append(sortBtnMax);
divForToDoList.append(labelMax);

divForToDoList.append(toDoList);


async function addToDoItem() {

  if (inputRef.value) {
    // state.push({
    // text: inputRef.value,
    // checked: false,
    // editable: false,
    // id: new Date(),
    // })

    const data = await createTodo(inputRef.value);

    if(!data){
      return
    }
    state.push(cookedData(data))
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

  // const index = state.findIndex(s => s.id.toString() == event.target.parentElement.dataset.id);
  const liObj = findObjbyEvent(event);

  const checkboxRef = event.target.parentElement.querySelector('input');
  const buttonsRef = [...event.target.parentElement.querySelectorAll('button')];

  checkboxRef.removeEventListener('click', checkedToDoItem);
  buttonsRef[0].removeEventListener('click', editToDoItem);
  buttonsRef[1].removeEventListener('click', removeToDoItem);

  const index = state.findIndex(s => s === liObj);
  deleteTodo(state[index].id)
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
  span.addEventListener('click', showData)
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

async function checkedToDoItem(event) {

  const liObj = findObjbyEvent(event);

  await updateData(liObj.id, {...liObj, checked: !liObj.checked});
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

  const newItem = createEditableToDoItem(liObj)
  event.target.parentElement.parentElement.replaceChild(newItem, event.target.parentElement);
}

async function saveToDoItem(event) {

  // console.dir(event.target.previousElementSibling.value)
  if (event.target.previousElementSibling.value != '') {
    const liObj = findObjbyEvent(event);

  await updateData(liObj.id, {...liObj, text: event.target.previousElementSibling.value});
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

//------запросы с сервера---------

function cookedData (item) {
  // console.log('item', item);
  return {text: item.title, checked: item.completed, id: item.id,editable: false}
}

function getInitialData () {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  .then((response) => response.json())
  .then((json) => json.map(cookedData))
  .then((mappedData) => state = mappedData)
  .then(() => renderLi())
  .catch(e => alert(e.message));
};

getInitialData();



function updateData(id, data) {

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        title: data.text,
        completed: data.checked,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(data => {
      // console.log(data)
      if(!data.ok){
        throw new Error(data.status);
      }
      return data
    })
    .then(async data => {
      const json = await data.json()
      const idx = state.findIndex(item => item.id === json.id);
      state[idx] = cookedData(json)
    }).then(data => {
      renderLi();
      return data
    })
    .catch((e) => console.log(e.message))

}

function deleteTodo(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE'
  })
}


function createTodo(title) {
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
  if(!data.ok){
    throw new Error(data.status);
  }
  return data
})
.then((response) => response.json()).catch((e) => console.log(e.message))
}

//------------------homework---------------------

function searchToDoItem() {
  if (event.target.previousElementSibling.value != '') {

    const searchText = event.target.previousElementSibling.value;
    const searchItems = state.filter(item => item.text.includes(searchText))
    state.length = 0;
    searchItems.forEach((s) => {
      state.push(s)
    })
    renderLi()
  }
}

function deleteSymbol() { //не получилось реализовать 1 часть(вместо функции searchToDoItem) если была ошибка ввода символа и удаление, то есть ввели aut потом удалили t, массив уже с выборкой out получается. или вводить строго правильно или обновлять тогда работает. хотела одной функцией обойтись, но пока так

  if (event.target.value != '') {

    // console.log(event.target.value)
    // console.log('state1', state1)

    // const searchText = event.target.value;

    // const searchItems = state1.filter(item => item.text.includes(searchText))
    // console.log(searchItems)
    // state.length = 0;
    // searchItems.forEach((s) => {
    //   state.push(s)
    // })
    // renderLi()

  } else {
    getInitialData();
  }
}

function sortByMin() {

  getInitialData()
  const sortArray = state.sort(function (a, b) {

      if (a.id > b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
  })
  console.log(sortArray)
  renderLi()
  console.log('min', state)
}

function sortByMax() {

  const sortArray = state.sort(function (a, b) {

      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
    return 0;

  })
  console.log(sortArray)
  renderLi()
  console.log('max', state)
}

async function showData(event) {

  const liObj = findObjbyEvent(event);
  console.log(liObj)
  const liRef = event.target.parentElement;
  console.log(liRef)
  const divInfo = document.createElement('div');
  liRef.append(divInfo);
  divInfo.style.display = 'inline-block';

  const id = liObj.id;

  const answer = await getInfo(id);

  divInfo.innerHTML = `${JSON.stringify(answer)}`;

  setTimeout(() => {
    divInfo.style.display = 'none';
  }, 5000)
}

function getInfo(id) {

  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then((response) => response.json())
  .then((json) => json)
  .catch(e => alert(e.message));
};
