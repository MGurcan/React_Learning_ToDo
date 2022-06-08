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

            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;