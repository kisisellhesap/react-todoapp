import React from "react";


const TaskComponent = ({ task, id, index, deleteFromList, toggleCheck, editTodo }) => {




    return (
        <li className={task.done ? "completed" : "view"}>
            <div className="view">
                <input className="toggle" type="checkbox" onChange={() => toggleCheck(id, index, task)} checked={task.done} readOnly />
                <label onClick={() => editTodo(id)}>{task.text}</label>
                <button className="destroy" onClick={() => deleteFromList(id, index)}></button>
            </div>
        </li>
    );
}
export default TaskComponent;