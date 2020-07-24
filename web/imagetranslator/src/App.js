import React,{Fragment, useState, useEffect} from 'react';
import axios from 'axios';


function App() {
const [location, setLocation] = useState(false);
const [weather, setWeather] = useState(false);
const [userGitHub, setUserGitHub] = useState(false);

let getWeather = async (latitude,longitude) => {
  let res = await axios.get("http://api.openweathermap.org/data/2.5/weather",{
    params:{
      lat: latitude,
      lon: longitude,
      appid: process.env.REACT_APP_IMAGE_TRANSLATOR_KEY,
      lang: 'pt',
      units:'metric'
    }
  });
  setWeather(res.data);
}

let getUserGitHub = async ()=> {
  let retorno = await axios.get("https://api.github.com/users/"+process.env.REACT_APP_USER_GITHUB)
  console.log(retorno.data)
  setUserGitHub(retorno.data);
}

useEffect(()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    getWeather(position.coords.latitude,position.coords.longitude);
    setLocation(true);
  })
},[])

if (location===false){
  return(
    <Fragment>
      Você precisa autorizar sua localização
    </Fragment>
  )
}else if(weather === false){

  return(
    <Fragment>
      Carregando os dados
    </Fragment>
  )
}else{
  return (
    <Fragment>
      <div>
        <h3>Clima nas coordenadas ({weather['name']} {weather['sys']['country']})</h3>
        <hr />
        <ul>
          <li>Temperatura atual: {weather['main']['temp']}ºC</li>
          <li>Sensação térmica: {weather['main']['feels_like']}ºC</li>
          <li>Umidade : {weather['main']['humidity']}%</li>
        </ul>
      </div>
      <div>
        <h3>Testando chamar API através de botão </h3>
        <button onClick ={ () => getUserGitHub() }>
          Clique aqui para ativar a API do GITHUB
        </button>
      </div>
    </Fragment>
  );
}


}


export default App;
