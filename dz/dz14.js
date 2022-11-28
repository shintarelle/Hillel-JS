// С помощью ajax-запроса вывести погоду

// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

// q=XXX - город, для которого показать погоду
// temp – температура
// pressure - давление
// description – описание
// humidity – влажность
// speed – скорость ветра
// deg – направление в градусах
// icon - значок, где 10d код иконки

// http://openweathermap.org/img/w/10d.png

const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';;

const myKey = 'fb86a06e04b21a55d95e3d6fea913514'; //my key

const inputRef = document.createElement('input');
inputRef.placeholder = "enter city";
inputRef.setAttribute('autofocus', 'autofocus');

const button = document.createElement('button');
button.innerText = 'Select';
button.addEventListener('click', getUrlCity);

const data = document.createElement('div');

const divWeather = document.getElementById('#weather');
divWeather.append(inputRef);
divWeather.append(button);
divWeather.append(data);


function clearOldData() {
  data.innerHTML = '';
}

function getUrlCity() {

  const url = (urlWeather + '?q=' + inputRef.value + '&units=metric&APPID=' + myKey).toString();

  clearOldData();

  fetch(url).then(response => response.json())
    .then(json => {
      const city = json.name;
      const temp = json.main.temp;
      const pressure = json.main.pressure;
      const description = json.weather[0].description;
      const humidity = json.main.humidity;
      const speed = json.wind.speed;
      const deg = json.wind.deg;
      const icon = json.weather[0].icon;

      const arrayWeather = [];
      arrayWeather.push('city: ');
      arrayWeather.push(city);
      arrayWeather.push('temperature, C: ');
      arrayWeather.push(temp);
      arrayWeather.push('pressure, kPa: ');
      arrayWeather.push(pressure);
      arrayWeather.push('description: ');
      arrayWeather.push(description);
      arrayWeather.push('humidity, %: ');
      arrayWeather.push(humidity);
      arrayWeather.push('wind speed, m/s: ');
      arrayWeather.push(speed);
      arrayWeather.push('direction of the wind, grad: ');
      arrayWeather.push(deg);

      data.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png">`;

      arrayWeather.forEach(elem => {
        const p = document.createElement('p');
        p.innerText = elem;
        data.appendChild(p);
      });

    })
    .catch(err => console.log(err));
  }
