import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addToDo }) {
    console.log(toDos);
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value); // 1. Input변경시 입력한 값을 text로 수정 (ex 입력감 => happy)
    };
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text); // 2. submit버튼 클릭시 입력한 값을 가지고 프롭스인 -> addToDo(happy)
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="To Do" value={text}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}
function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(add(text)), //3. store에 있는 actionCreators.addToDo(happy) 값을가지고 이동
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
