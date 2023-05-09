import React from "react";

const FooterComponent = ({ todo, setTodo, filter, setFilter }) => {


    const allClear = () => {
        setTodo(todo.filter((task) => !task.done))
    }

    const hidden = () => {
        const hiddenCLass = todo.every((task) => !task.done)
        return hiddenCLass ? "hidden" : "";
    }



    return (
        <footer className="footer">

            <span className="todo-count">
                <strong>{todo.filter((task) => !task.done).length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>All</a>
                </li>
                <li>
                    <a href="#/" className={filter === "active" ? "selected" : ""} onClick={() => setFilter("active")} > Active</a>
                </li>
                <li>
                    <a href="#/" className={filter === "completed" ? "selected" : ""} onClick={() => setFilter("completed")}  > Completed</a>
                </li>
            </ul >


            <button className={`clear-completed ${hidden()}`} onClick={allClear}>
                Clear completed
            </button>
        </footer >
    );
}


export default FooterComponent; 