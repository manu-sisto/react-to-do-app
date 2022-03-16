import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    const elim = (idnum) => {
        props.eliminar(idnum)
    };

   return (
       <div className='anotador'>
            <div className='listHeader'>Things to Do: {props.tareas.filter(el => el.completed === false).length}</div>
            <div className='title'>List of things: </div>
            <ul className='ul'>
                {props.tareas.map((arr)=> <ToDo key={arr.id} tarea={arr} onChange={elim}/>)}
            </ul>
       </div>
   )
};
 
export default ToDoList;
