import { Types } from './Types';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case Types.CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case Types.REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case Types.COMPELETED_TODO: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                return {...todo, isCompleted: true};
            }
            return todo;
        });
    }
    default:
        return state;
    }
}