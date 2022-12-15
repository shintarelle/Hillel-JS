import List from './List.js';
import State from './State.js';

class Controller {     //синяя рамка, то что управляет нашими тудушками

  inputRef;

  constructor () {
    this.state = State.getInstance();
  }

  validate(){

    console.log('inputList validate', )
  }

  addToDoItem(){
    // console.log(e);
    // console.log('addToDoItem', this);

    if (this.inputRef.value) {
      this.state.addElement({
        text: this.inputRef.value,
        checked: false,
        editable: false,
        id: new Date(),
      })

      // const data = await createTodo(inputRef.value);

      // if(!data){
      //   return
      // }

      // state.push(cookedData(data))
      // renderLi();

      this.inputRef.value = '';
    }
  }

  clearALL() {
    console.log('this.state--->', this.state)
    console.log('this.state.getState()--->', this.state.getState())
    console.log('this.state.getInstance()--->', State.getInstance())

    // this.state.getState().forEach(elem => console.log('elem', elem))
    //! пробовала перебрать миссив и к каждому применить метод deleteElement() но остается один элемент
    this.state.getState().forEach(elem => this.state.deleteElement(elem.id))

    //! 2 вариант: я не могу добраться до метода clearALLElement() который прописан в State.js
    console.log('this.state.getState()--again ->', this.state.getState())

  }

  render() {
    this.inputRef = document.createElement('input');
    this.inputRef.addEventListener('input', this.validate);


    const addList = document.createElement('button');
    addList.innerText = 'Add';
    addList.addEventListener('click', this.addToDoItem.bind(this));

    const buttonClearAll = document.createElement('button');
    buttonClearAll.innerText = 'Clear all';
    buttonClearAll.addEventListener('click', this.clearALL.bind(this));


    return [this.inputRef, addList, buttonClearAll]
  }
}

export default Controller;
