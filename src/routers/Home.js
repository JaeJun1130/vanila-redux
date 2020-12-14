import React, { useState } from "react";

const App = () => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setText("");
    };
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="To Do" value={text}></input>
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
};

export default App;
