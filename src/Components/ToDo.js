import React from 'react';

const ToDo = ({todo, handleToggle}) => {
    
    
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }

    return (

        <div  key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
                {todo.task}
                
                <button  id={todo.id} onClick={handleClick}>Done</button>
                
        </div>
    );
};

export default ToDo;