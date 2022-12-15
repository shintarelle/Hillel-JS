import TodoList from './TodoList.js'

const todoList = TodoList.getInstance("divtoDoList");

todoList.render();

// const rerender = () => {
//   divtoDoList.innerHTML = ''
//   todoList.render();
// }
// const btn = document.createElement("button");
// btn.innerHTML = "render"
// btn.addEventListener('click', rerender);
// document.body.append(btn)
