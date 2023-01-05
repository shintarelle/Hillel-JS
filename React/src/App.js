// import logo from './logo.svg';
import './App.css';

import Header from './Header';

import Main from './Main';

// Приложение должно состоять из трёх блоков:
// хедер
// левая боковая навигация
// центральный контейнер
// Контент внутри блоков произвольный

function App() {
  return (
    <div className="MyApp">
      <Header />
      <Main />
    </div>
  );
}

export default App;
