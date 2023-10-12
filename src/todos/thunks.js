import { loadTodosInProgress, loadTodosSuccess, loadTodosError } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    try{
        dispatch(loadTodosInProgress());
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    }catch(err){
        dispatch(loadTodosError(err));
        dispatch(displayAlert(err));
    };
}

export const displayAlert = (text) => () => {
    alert(text);
}