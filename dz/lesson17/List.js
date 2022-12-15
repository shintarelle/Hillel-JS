import ListItem from './ListItem.js';
import State from './State.js';

class List {         //голубая рамка, наша ul
  constructor() {
    this.state = State.getInstance();
    // console.log(this.state)
  }

  // clearAll() {
  //   toDoList.innerHTML = '';
  //   this.render();
  // }

  render(){
    const toDoList = document.createElement('ul');

    const items = this.state.getState().map(s => new ListItem(s, this.state));   // parameter state, map
    const rendered = items.map(item => item.render());

    // console.log('items', items);

    return [toDoList, ...rendered]
  }
}

export default List;
