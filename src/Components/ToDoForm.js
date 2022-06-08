import React, { useState } from 'react';

const ToDoForm = ({ addTask, removeDoneTasks }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>

            <div id="removeTasks" onClick={removeDoneTasks}> Delete done tasks</div>

            <div className='inputArea'>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." id="inputBar"/>
            <button id="inputSubmitButton">Submit</button>
            </div>

            
        </form>
    );
};

export default ToDoForm;