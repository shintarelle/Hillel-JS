import List from './List.js';
import Controller from './Controller.js'
import State from './State.js';

const mockData = [{
        text: '1 todo',
        checked: false,
        editable: false,
        id: new Date(),
      },
    {
        text: '2 todo',
        checked: false,
        editable: true,
        id: new Date()+1,
      },{
        text: '3 todo',
        checked: true,
        editable: false,
        id: new Date()+2,
      },{
        text: '4 todo',
        checked: true,
        editable: true,
        id: new Date()+3,
      }]

class TodoList {    //зеленая рамка, общее наше приложение в котором контроллер и ul

  static instance = {};
  static getInstance(id) {
    if (!TodoList.instance[id]) {

      const instance = new TodoList(id);
      const state = State.getInstance();

      instance.setState(state);
      state.setRenderFn(instance.render.bind(instance));

      TodoList.instance[id] = instance;
    }
    return TodoList.instance[id];
  }

  constructor (id) {
    this.id = id;
    // this.state = State.getInstance(this.render.bind(this));
  }

  setState(state) {
    this.state = state;
  }
  render() {
    const wrapper = document.querySelector(`#${this.id}`);
    wrapper.innerHTML = '';

    const list = new List();

    const controller = new Controller();
    wrapper.append(...controller.render(), ...list.render());
  }
}

export default TodoList;
