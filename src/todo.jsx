import React, { useState } from "react"


function Todo() {

  const [tasks, setTasks] = useState(["eat breakfast","take a shower","work hard",]);
  const [newTask, setNewTasks] = useState("");

  function handleInput(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {

    if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask]);
      setNewTasks("");
    }

  }
  function deleteTask(index) {
    let updatedTasks= tasks.filter((element,i) =>i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
  }
  }
  function moveTaskDown(index) {
    if (index<tasks.length -1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks); 
    }
  }
  return (
    <div className="to-do-list">

      <h1>To-Do-List</h1>

      <div>
        <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInput}></input>
        <button className="add-button" onClick={addTask}>ADD</button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}> 
          <span className="text">{task}</span>
          <button className="delete-button" onClick={()=>deleteTask(index)}>delete</button>
          <button className="move-button" onClick={()=>moveTaskUp(index)}>moveup</button>
          <button className="move-button" onClick={()=>moveTaskDown(index)}>movedown</button>
          </li> 
        )}
      </ol>
    </div>
  )
}
export default Todo;


