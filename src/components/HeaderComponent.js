import React from "react";

const HeaderComponent = ({ taskText, handleChange, addTheList }) => {



    return (
        <header className="header">
            <h1>todos</h1>
            <form>
                <input name="text" className="new-todo" value={taskText} placeholder="What needs to be done?" onKeyDown={addTheList} onChange={handleChange} autoFocus />
            </form>
        </header>
    );
}


export default HeaderComponent;