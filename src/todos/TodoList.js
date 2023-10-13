import {React, useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos } from './thunks';
import { removeTodo, isLoading } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompeletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    },[]);
    const LoadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompeletePressed={onCompeletePressed} />)}
        </div>
    );
    return isLoading ? LoadingMessage : content;
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompeletePressed: text => dispatch(completedTodo(text)),
    startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);