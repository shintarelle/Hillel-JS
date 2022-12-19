
import './MyApp.css';
import ShowResult from 'ShowResult.js'


// На странице отображается список смайликов и счетчик кликов по каждому
//Ниже есть кнопка “Show Results” которая выводит победивший смайл на основании количества голосов


function MyApp() {
  return (
    <div className="myApp">
      <div className='container'>
        <Smile />
        <Smile />
        <Smile />
        <Smile />
        <Smile />
      </div>
      <ShowResult />

    </div>
  );
}

export default MyApp;


{/* <div className='MyApp'>
  <div>
    <div><img src="" alt=""/><button>smile 1</button></div>
    <div><img src="" alt=""/><button>smile 2</button></div>
    <div><img src="" alt=""/><button>smile 3</button></div>
    <div><img src="" alt=""/><button>smile 4</button></div>
    <div><img src="" alt=""/><button>smile 5</button></div>

  </div>
  <button>Show result</button>
</div> */}
