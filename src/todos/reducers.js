import { CREATE_TODO, REMOVE_TODO } from "./actions";
export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            return [...state, {payload, isCompleted: false}];
        }
        case REMOVE_TODO:
            return state.filter(todo => todo.text!== payload);
        default: return state;
    }
}