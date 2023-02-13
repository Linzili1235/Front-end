import './App.css';
import {WeatherPanel} from "./WeatherPanel";
import {useState} from "react";
import ContactMe from "./ContactMe";
import {UseEffectPanel} from "./UseEffectPanel";

function App() {
    console.log('===> APP')
    const [value, updateValue] = useState('')
    const [close, isClose] = useState(false)
  return (
    <div className="App">
        <h2>This is main page</h2>
        <p>{value}</p>
        <input type="text" onChange={(e) => updateValue(e.target.value)}/>
        <hr/>
        <div className="childrenContainer">
            <WeatherPanel city={'toronto'} closeMe = {() =>
            isClose(true)
            }/>
            <WeatherPanel city={'beijing'}/>
            {!close && <ContactMe/>}
        </div>
        <hr/>
        <h1>useEffect</h1>
        <UseEffectPanel/>


      </div>
  );
}

export default App;
