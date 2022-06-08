import './App.css';
import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

function App() {

  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    console.log(id);
    let mapped = toDoList.map(task => {
      return task.id == Number(id) ? {...task, complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  }

  const addTask = (userInput) => {
    if(userInput.replace(/ /g, "")=="")
      return;
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length+1, task: userInput, complete:false}];
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
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
      <ToDoForm addTask={addTask} removeDoneTasks={removeDoneTasks}/>
    </div>
  );
}

export default App;
