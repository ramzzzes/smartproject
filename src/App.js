import './App.css';
import {WelcomeContext} from "./WelcomeContext";
import Welcome from "./Welcome";
import {useState} from "react";

function App() {

  const [color,setColor] = useState('red')

  return (
      <>
          <WelcomeContext.Provider value={{color,setColor}}>
              <Welcome/>
          </WelcomeContext.Provider>
      </>
  );
}

export default App;
