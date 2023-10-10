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