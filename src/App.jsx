import { React, Fragment } from "react";
import './App.css';
import Hola from "./components/Hola.jsx";
import Contador from "./components/Contador"
import Listado from "./components/Listado";
import Temperature from './components/Temperature'
import Form from './components/Form'


function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo del primer proyecto {1+1}</h1>
      
      <Hola/>

      <Contador />

      <Listado/>

      <Temperature/>

      <Form/>

    </div>
  );
}

export default App;
