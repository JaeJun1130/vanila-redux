import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//     // 5. addToDo(happy)
//     return {
//         type: ADD, // type이 add인
//         text, //happy
//     };
// };
// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id),
//     };
// };

// const addToDo = createAction("ADD"); //action.type으로 ADD를 준다, 두번쨰 인자로는 payLoad 입력한text값을 받아온다  dispatch -> action -> reducer
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [, ...state]; //6. text:happy id:id값 state = [happy,id]
//         case deleteToDo.type:
//             return state.filter((toDo) => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// const reducer = createReducer([], {
//     //reducer withch case 문 없이 깔끔하게 수정
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() }); //push로 수정을 해서 리턴을하면 리덕스 & 아이머가 알아서 새로운 스테이트를 리턴해준다
//     },
//     [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload), // 새로운 스테이트를 바로 리턴
// });
//  const store = createStore(reducer);

const toDos = createSlice({
    //reducer 뿐만아니라 action.type도 생성해준다
    name: "toDoList",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
    },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
