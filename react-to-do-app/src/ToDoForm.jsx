import React from 'react';
import { useState } from 'react';
 
const ToDoForm = (props) => {
    const [a, setA] = useState("");

    function handleSubmit1() {
        props.setter((prevObj)=> {
            return [...prevObj, {id: props.tareas.length + 1, task: a, completed: false} ];
        })
        setA('')
    };

    function handleSubmit2() {
        props.setter((prevObj)=> {
            return [];
        })
    };

   return (
       <React.Fragment>
            <div>Agregar tarea:</div>
            <input type="text" placeholder='Nueva tarea' value={a} onChange={(e)=> {
                setA(e.target.value)
                }}/>
            <button onClick={handleSubmit1} >Agregar</button>
            <button onClick={handleSubmit2} >Borrar lista</button>
       </React.Fragment>
   );
};
 
export default ToDoForm;