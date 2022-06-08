import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle})  => {

    return (
        <div id="todoList">
        {toDoList.map(todo => {
            return (
                <ToDo todo={todo} handleToggle={handleToggle}/>
            )
        })}
        </div>
    );
};

export default ToDoList;