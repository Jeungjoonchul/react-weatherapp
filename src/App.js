import React, {useState} from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setReady] = useState('');

  React.useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hanam&units=metric&appid=3c324820a02abe0101e1dfac82a9424f')
    .then(result => result.json())
    .then(jsonresult => {
      setTemp(jsonresult.main.temp);
      setDesc(jsonresult.weather[0].main);
      setIcon(jsonresult.weather[0].icon);
      setReady(true);
    })
    .catch(err=>console.error(err))
  },[])

  if(isReady){
    return (
      <div className="App">
        <p>Temperature: {temp}℃</p>
        <p>Description : {desc}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"/>
      </div>
    )
  }
  else{
    return <div className="App">Loading...</div>
  }
}

export default App;
