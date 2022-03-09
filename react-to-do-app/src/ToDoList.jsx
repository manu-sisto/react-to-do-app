import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    console.log("render list:" , props);

    const elim = (idnum) => {
        props.eliminar(idnum)
    };

   return (
       <React.Fragment>
           <div>Lista de tareas por hacer:</div>
           <ul>
                {props.tareas.map((arr)=> <ToDo key={arr.id} tarea={arr} onChange={elim}/>)}
           </ul>
       </React.Fragment>
   )
};
 
export default ToDoList;
