import React from 'react';

const ToDo = (props) => {
    function click() {
        props.onChange(props.tarea.id)
        /*
        props.setter((prevArr)=> {
            const obj = {id: props.tarea.id, task: props.tarea.task, completed: true}
            prevArr[props.tarea.id - 1] = obj;
            return prevArr;
        })
        */
    };

   return (
       <React.Fragment>
           <li className={props.tarea.completed? "done":" "} >{props.tarea.id + " " + props.tarea.task}</li> 
           <button onClick={click}>X</button>
       </React.Fragment>
   );
};
 
export default ToDo;
