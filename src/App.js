import './App.css';
import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ToDo from "./Components/ToDo";



import { useId } from "react";


function CalculateID(word) {
  var result = 0;
  for (var i = 0; i < word.length; i++) {
    result += (i + 1) * Number(word.charAt(i).charCodeAt(0));
  }
  return result;
}


function App() {

  const [toDoList, setToDoList] = useState(data);
  const idm = useId();
  console.log("idm: " + idm);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const addTask = (userInput) => {

    if (userInput.replace(/ /g, "") == "")
      return;
    let copy = [...toDoList];
    copy = [...copy, { id: CalculateID(userInput), task: userInput, complete: false }];
    //copy = [...copy, {id: useId, task: userInput, complete:false}];
    setToDoList(copy);
  };

  const removeDoneTasks = () => {
    let copy = toDoList.filter(task => {
      return !task.complete;
    })
    /* copy.forEach(element => {
      console.log(element.complete);
      element.complete = !element.complete; 
    }); */
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <ToDoForm addTask={addTask} removeDoneTasks={removeDoneTasks} />
    </div>
  );
}

export default App;
