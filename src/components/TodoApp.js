import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";

// const Initial_state = [
//     { text: "get up", done: false },
//     { text: "take a shower", done: false },
//     { text: "eat", done: false },
// ]

const TodoApp = () => {

    const [todo, setTodo] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [filter, setFilter] = useState("all");

    // useEffect(() => { console.log(taskText) }, [taskText]);
    useEffect(() => { console.log("todo", todo) }, [todo]);
    useEffect(() => {
        console.log("filter", filter)
    }, [filter]);

    const handleChange = (e) => {
        setTaskText(e.target.value);
    }

    const addTheList = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setTodo([...todo, { id: todo.length + 1, text: taskText, done: false, isEditing: false }]);
            setTaskText("");
        }
    }

    const filteredTodos = todo.filter((task) => {
        if (filter === "completed") {
            return task.done;
        } else if (filter === "active") {
            return !task.done;
        }
        return todo;
    });







    return (
        <section className="todoapp">
            <HeaderComponent taskText={taskText} handleChange={handleChange} addTheList={addTheList} />

            <MainComponent todo={todo} setTodo={setTodo} filteredTodos={filteredTodos} />

            {todo.length > 0 && <FooterComponent todo={todo} setTodo={setTodo} filter={filter} setFilter={setFilter} />}

        </section>
    );
}


export default TodoApp;