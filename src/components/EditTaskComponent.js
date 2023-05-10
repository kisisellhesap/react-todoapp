import React, { useState } from "react";

const EditTaskComponent = ({ task, editTodo, id }) => {

    const [editText, setEditText] = useState(task.text);

    const editHandleChange = (e) => {
        setEditText(e.target.value);
    }
    const editAddTheList = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            editTodo(editText, id);
            setEditText("");
        }
    }

    return (
        <form>
            <input name="text" className={task.isEditing ? "edit" : "new-todo"} value={editText} placeholder="Edit Task" onKeyDown={editAddTheList} onChange={editHandleChange} onBlur={() => editTodo(editText, id)} autoFocus />
        </form>
    );
}


export default EditTaskComponent;