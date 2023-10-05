import React from 'react'
import "./style.css"
const TodoTemplate = () => {
  return (
    <div className="container">
        <h2>To-Do List</h2>
        <form id="task-form">
            <input type="text" id="task" placeholder="Add a new task..." required/>
            <button type="button" onclick="addTask()">Add Task</button>
        </form>

        <ul id="task-list">
            <li>
                <span>Sample Task 1</span>
                <button className="update-btn">Update</button>
                <button className="delete-btn">Delete</button>
            </li>
            <li>
                <span>Sample Task 2</span>
                <button className="update-btn">Update</button>
                <button className="delete-btn">Delete</button>
            </li>
            {/* <!-- Additional tasks can be added here --> */}
        </ul>
    </div>
  )
}

export default TodoTemplate