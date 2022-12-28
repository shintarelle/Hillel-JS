import Server from "./TodoServer";
const userId = 1;
export default class State{

  #state;
  #renderFn;
  #search = [];


  static instance;
  static getInstance() {
    if (!State.instance) {
      State.instance = new State()
    }
    return State.instance;
  }

  constructor() {
    this.setState();
    // this.#state = [];
    //   [{
    //     text: '1 milk',
    //     checked: false,
    //     editable: false,
    //     id: new Date()+0,
    //   },
    // {
    //     text: '2 massage',
    //     checked: false,
    //     editable: true,
    //     id: new Date()+1,
    //   },{
    //     text: '3 mochko',
    //     checked: true,
    //     editable: false,
    //     id: new Date()+2,
    //   },{
      //   text: '4 murder',
      //   checked: true,
      //   editable: true,
      //   id: new Date()+3,
      // }];

  }
  setState() {
    console.log('here')
    // const responce = this.getToDo();
    this.#state = [];
    this.rerender();
  }

//   getToDo () {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
//     .then((response) => response.json())
//     .then((json) => json.map(this.cookedData))
//     .then((mappedData) => mappedData.map(elem => this.state.addElement(elem)))
//     .catch(e => alert(e.message));
// };

  addElement(item) {
    this.#state.push(item);
    this.rerender();
  }
  addSearch(item) {
    this.#search.push(item);
    this.rerender();
  }

  deleteElement(id) {
    const idx = this.findIndexByID(id);
    this.#state.splice(idx, 1)
    this.rerender();
  }

  deleteSearch(id) {
    const idx = this.findIndexByID(id);
    this.#search.splice(idx, 1)
    this.rerender();
  }

  updateElement(id, item) {
    const idx = this.findIndexByID(id);
    this.#state[idx] = item;
    this.rerender();
  }

  findByID(id) {
    return this.#state.find(i => i.id === id)
  }

  findIndexByID(id) {
    return this.#state.findIndex(i => i.id === id)
  }

  getState() {
    return this.#state;
  }
  getSearch() {
    return this.#search
  }

  setRenderFn(renderFn) {
    this.#renderFn = renderFn;
  }
  rerender() {
    this.#renderFn();
  }
}
