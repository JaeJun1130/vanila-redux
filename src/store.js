import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    // 5. addToDo(happy)
    return {
        type: ADD, // type이 add인
        text, //happy
    };
};
const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id),
    };
};
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state]; //6. text:happy id:id값 state = [happy,id]
        case DELETE:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};
const store = createStore(reducer);

export const actionCreators = {
    addToDo, // 4. addToDo 함수로 이동
    deleteToDo,
};
export default store;
