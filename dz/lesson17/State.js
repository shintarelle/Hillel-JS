export default class State{

  #state;
  #renderFn;

  static instance;
  static getInstance() {
    if (!State.instance) {
      State.instance = new State()
    }
    return State.instance;
  }

  constructor() {
    this.#state = [];
    //   [{
    //     text: '1 todo',
    //     checked: false,
    //     editable: false,
    //     id: new Date()+0,
    //   },
    // {
    //     text: '2 todo',
    //     checked: false,
    //     editable: true,
    //     id: new Date()+1,
    //   },{
    //     text: '3 todo',
    //     checked: true,
    //     editable: false,
    //     id: new Date()+2,
    //   },{
    //     text: '4 todo',
    //     checked: true,
    //     editable: true,
    //     id: new Date()+3,
    //   }];

  }
  addElement(item) {
    this.#state.push(item);
    this.rerender();
  }

  deleteElement(id) {   //! --------------
    const idx = this.findIndexByID(id);
    this.#state.splice(idx, 1)
    this.rerender();
  }

  clearAllElement() { //!--- до этого метода из контроллера у меня не получается достучаться. работает он или нет
    // this.#state.forEach(elem => this.state.deleteElement(elem.id))
    this.#state.splice(0, this.#state.length)
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

  setRenderFn(renderFn) {
    this.#renderFn = renderFn;
  }
  rerender() {
    this.#renderFn();
  }
}
