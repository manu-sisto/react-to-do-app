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
           <div className='formTareas'>
                <div>Add a task to Do:</div>
                <input type="text" placeholder='New Task' value={a} onChange={(e)=> {
                    setA(e.target.value)
                    }}/>
                <button className='button-10' onClick={handleSubmit1} >Add</button>
                <button className='button-10' onClick={handleSubmit2} ><i className="fa fa-trash-o"></i> List</button>
            </div>
       </React.Fragment>
   );
};
 
export default ToDoForm;