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

export const isLoading = (state = [], action) => {
    const { type } = action;
    switch(type){
        case LOAD_TODOS_IN_PROGRESS: {
            return true;
        }
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_ERROR:
            return false;
        default:
            return state;
    }
}