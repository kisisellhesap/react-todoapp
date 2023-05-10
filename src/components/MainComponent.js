import React from "react";
import TaskComponent from "./TaskComponent";
import EditTaskComponent from "./EditTaskComponent";
const MainComponent = ({ todo, setTodo, filteredTodos }) => {


    const deleteFromList = (id) => {
        setTodo(todo.filter((task) => task.id !== id));

    }

    const toggleCheck = (id) => {
        setTodo(todo.map((task) => task.id === id ? { ...task, done: !task.done } : task
        ))
    }

    const allToggleCheck = () => {
        setTodo(todo.map((task) => task.done ? { ...task, done: !task.done } : { ...task, done: !task.done }))
    }


    const editTodo = (id) => {
        setTodo(todo.map((task) => task.id === id ? { ...task, isEditing: !task.isEditing } : task))
    }

    const editTask = (editValue, id) => {
        setTodo(todo.map((task) => task.id === id ? { ...task, text: editValue, isEditing: !task.isEditing } : task))
    }

    return (
        <section className="main">

            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={allToggleCheck}>
                Mark all as complete
            </label>

            <ul className="todo-list">

                {filteredTodos.map((task) => {
                    return (
                        task.isEditing ? (<EditTaskComponent key={task.id} id={task.id} task={task} editTodo={editTask} />) : (
                            <TaskComponent key={task.id} id={task.id} task={task} deleteFromList={deleteFromList} toggleCheck={toggleCheck} editTodo={editTodo} />
                        )

                    );
                })}
            </ul>
        </section>
    );
}


export default MainComponent;