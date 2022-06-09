import React from 'react';
import { Link } from "react-router-dom";

const Details = ({ todo }) => {


    return (

        <div>
            <h1>Todo Item Details:</h1>
            <p>Task Text: {todo.task}</p>
            <p>Task ID: {todo.id}</p>
            <p>Finished: {(todo.complete) ? "YES" : "NO"}</p>

            <Link to="/" id="close-details"> Close Details </Link>
        </div>
    );
};

export default Details;