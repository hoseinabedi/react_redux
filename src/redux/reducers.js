import { CREATE_TODO, DELETE_TODO } from "./actions";
export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO:
            const { text } = payload;
            const newTodo = { text, isCompleted: false };
            return state.concat(newTodo);
        case DELETE_TODO:
            const { text } = payload;
            return state.filter((todo) => todo.text !== text);
        default:
            return state;
    }
}
