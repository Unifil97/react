import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button,TextField } from '@material-ui/core';
import './App.css';


function App() {
  const [cityname, setCityname] = useState("Jyväskylä")
  
    const [weather, setWeather] = useState(null);
    const API_KEY = 'api key tähän'
    ;
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const ICON_URL = 'http://openweathermap.org/img/wn/';
  
  const getWeather = () => {
    axios
      .get(URL+cityname+'&appid='+API_KEY+'&units=metric')
      .then(response => {
        // console.log(response.data) to see data in console
        setWeather(response.data)
      })
  }
  

  return (
    <div className='App'>
      
<h1>React Weather Application</h1>
<p>
  This application will fetch a weather forecast from the OpenWeather.
  Just type city name and click Get Forecast button!
</p>
<h2>Loaded weather forecast</h2>
{ weather !== null &&          
  <div>
    City: {weather.name}<br/>
    Main: {weather.weather[0].main}<br/>
    Temp: {weather.main.temp} °C<br/>
    Feels: {weather.main.feels_like} °C<br/>
    Min-Max: {weather.main.temp_min} - {weather.main.temp_max} °C<br/>
    <img
      alt={cityname} 
      style={{height: 100, width: 100}}
      src={ICON_URL+weather.weather[0].icon+'.png'}/>
</div>
}

{ weather === null &&
  <p>-</p>
}
<form>
  <TextField onChange={ (e) => setCityname(e.target.value)} label="Cityname" 
             defaultValue="Jyväskylä" 
             id="outlined-basic" 
             />
  <Button  onClick={() => getWeather()} variant="contained" 
          color="primary" 
          size="small" 
          >
    Get Forecast
  </Button>
</form>
    </div>
    
  );
}


export default App;


