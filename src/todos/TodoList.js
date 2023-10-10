import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, completedTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompeletePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompeletePressed={onCompeletePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompeletePressed: text => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);