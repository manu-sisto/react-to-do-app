
import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from './ToDoList';


function App() {
  const [tareas, setTareas] = useState([]);

  const eliminar = (idnum) => {

    if (tareas[idnum - 1].completed === false) {
      setTareas((prevArr) => {
        prevArr[idnum - 1].completed = true;
        return [...prevArr]
      })
    } else {
      setTareas((prevArr) => {
        prevArr[idnum - 1].completed = false;
        return [...prevArr]
      })
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <ToDoList tareas={tareas} setter={(tasks)=>{
        setTareas(tasks)
      }} eliminar={eliminar}/>
      <ToDoForm  tareas={tareas} setter={setTareas} />
    </React.Fragment>
  );
}

export default App;
