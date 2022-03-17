import React, { useState } from 'react';

const ToDo = (props) => {
    const [disable, setDisable] = useState(false);
    function click() {
        props.onChange(props.tarea.id)
        setDisable(true)
    };

   return (
       <React.Fragment>
            <li className={props.tarea.completed? "item done":"item"} >{props.tarea.id + ". " + props.tarea.task}
                <button disabled={disable} className='button-10' onClick={click}> done! </button>
            </li>
       </React.Fragment>
   );
};
 
export default ToDo;
