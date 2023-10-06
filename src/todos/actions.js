export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
})

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = text => ({
    type: DELETE_TODO,
    payload: { text }
});