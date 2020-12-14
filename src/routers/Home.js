import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
    //8 [happy.id]
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value); // 1. Input변경시 입력한 값을 text로 수정 (ex 입력감 => happy)
    };
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(text);
        addToDo(text); // 2. submit버튼 클릭시 입력한 값을 가지고 프롭스인 -> addToDo(happy)
        setText("");
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="To Do" value={text}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </>
    );
};

function mapStateToProps(state) {
    //7. state에 있는 값을 가져옴 [happy,id]
    return { toDos: state };
}
function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)), //3. store에 있는 actionCreators.addToDo(happy) 값을가지고 이동
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
