import React from "react";


const TaskComponent = ({ task, id, deleteFromList, toggleCheck, editTodo }) => {

    return (
        <li className={task.done ? "completed" : "view"}>
            <div className="view">
                <input className="toggle" type="checkbox" onChange={() => toggleCheck(id)} checked={task.done} readOnly />
                <label onClick={() => editTodo(id)}>{task.text}</label>
                <button className="destroy" onClick={() => deleteFromList(id)}></button>
            </div>
        </li>
    );
}
export default TaskComponent;