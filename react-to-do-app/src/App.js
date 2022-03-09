
import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from './ToDoList';


function App() {
  const [tareas, setTareas] = useState([]);

  const eliminar = (idnum) => {
    if (tareas[idnum - 1].completed === false) {
      console.log("entro aca 1")
      setTareas((prevArr) => {
        prevArr[idnum - 1].completed = true;
        return [...prevArr]
      })
    } else {
      console.log("aca 2")
      setTareas((prevArr) => {
        prevArr[idnum - 1].completed = false;
        return [...prevArr]
      })
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <div>Tareas por hacer: {tareas.length}</div>
      <ToDoList tareas={tareas} setter={(tasks)=>{
        setTareas(tasks)
      }} eliminar={eliminar}/>
      <ToDoForm tareas={tareas} setter={setTareas} />
    </React.Fragment>
  );
}

export default App;
