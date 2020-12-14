import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            const newDoto = { text: action.text, id: Date.now() };
            return [newDoto, ...state];
        case DELETE_TODO:
            return state.filter((toDo) => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

const disPatchAddTodo = (text) => {
    store.dispatch({ type: ADD_TODO, text });
};
const disPatchDeleteToDo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch({ type: DELETE_TODO, id });
};

const paintToDos = () => {
    const toDos = store.getState();
    console.log(toDos);
    ul.innerHTML = "";
    toDos.forEach((toDo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", disPatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        ul.appendChild(li);
        li.appendChild(btn);
    });
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    disPatchAddTodo(toDo);
};
form.addEventListener("submit", onSubmit);
