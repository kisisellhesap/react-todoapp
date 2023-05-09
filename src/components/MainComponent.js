import React from "react";
import TaskComponent from "./TaskComponent";
import EditTaskComponent from "./EditTaskComponent";
const MainComponent = ({ todo, setTodo, filteredTodos }) => {


    const deleteFromList = (id, index) => {
        setTodo(todo.filter((task, index) => id !== index));
        console.log("id  ", id, "index  ", index);
    }

    const toggleCheck = (id, index) => {
        setTodo(todo.map((task, index) => index === id ? { ...task, done: !task.done } : task
        ))

        console.log("id  ", id, "index  ", index);
    }

    const allToggleCheck = (index) => {
        setTodo(todo.map((task, index) => task.done ? { ...task, done: !task.done } : { ...task, done: !task.done }))
    }


    const editTodo = (id) => {
        setTodo(todo.map((task, index) => index === id ? { ...task, isEditing: !task.isEditing } : task))
    }

    const editTask = (editValue, id) => {
        setTodo(todo.map((task, index) => index === id ? { ...task, text: editValue, isEditing: !task.isEditing } : task))
    }

    return (
        <section className="main">

            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={allToggleCheck}>
                Mark all as complete
            </label>

            <ul className="todo-list">

                {filteredTodos.map((task, index) => {
                    return (
                        task.isEditing ? (<EditTaskComponent key={index} id={index} task={task} editTodo={editTask} />) : (
                            <TaskComponent key={index} id={index} task={task} index={index} deleteFromList={deleteFromList} toggleCheck={toggleCheck} editTodo={editTodo} />
                        )

                    );
                })}
            </ul>
        </section>
    );
}


export default MainComponent;