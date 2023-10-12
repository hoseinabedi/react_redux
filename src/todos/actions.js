import { Types } from './Types';

export const createTodo = text => ({
    type: Types.CREATE_TODO,
    payload: { text },
});


export const removeTodo = text => ({
    type: Types.REMOVE_TODO,
    payload: { text },
});

export const completedTodo = text => ({
    type: Types.COMPELETED_TODO,
    payload: { text },
});

export const loadTodosInProgress = () => ({
    type: Types.LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = todos => ({
    type: Types.LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const loadTodosError = error => ({
    type: Types.LOAD_TODOS_ERROR,
    payload: { error },
});