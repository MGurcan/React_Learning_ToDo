import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Details';
import Layout from "./Layout";
const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }

    return (

        <div key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}

            <BrowserRouter>
                <Routes>
                    {/* <Route path={path} element={<h1>SELAMMMMMMMMMMMMMMMMM</h1>} /> */}

                    {/* <Route path={todo.id.toString()} element={<h1>SELAMMMMMMMMMMMMMMMMM: {todo.id}</h1>} /> */}
                    <Route path={todo.id.toString()} element={<Details todo={todo} />} />
                    <Route path="/" element={<Layout todo={todo} />} />
                    <Route path="*" element={<h1>404</h1>} /> 

                </Routes>
            </BrowserRouter>

            <button className="doneButtons" id={todo.id} onClick={handleClick}>Change Status</button>
        </div>
    );
};

export default ToDo;