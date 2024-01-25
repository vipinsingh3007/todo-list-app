/**
 *  Component TodoList
 *
 *  Represents and renders a todo list with todo items
 *
 */

import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo, removeTodo, toggleTodo} from '../../actions/todos';
import {TodoItem} from '../todo-item';

export default Object.assign(
    function (props) {
        // connects to the redux state
        const todos = useSelector((state) => state.todos);
        const dispatch = useDispatch();
        const addTodoRef = useRef();

        // add items to the list
        const addItem = (e) => {
            e.preventDefault();

            dispatch(
                addTodo({
                    name: addTodoRef.current.value,
                    id: new Date().getTime(),
                    complete: false,
                }),
            );

            addTodoRef.current.value = '';
        };

        // Remove items from todo list
        const removeItem = (todo) => {
            dispatch(removeTodo(todo));
        };

        // Mark item as complete.
        const toggleItem = (id) => {
            dispatch(toggleTodo(id));
        };

        return (
            <div>
                <h1 data-testid="todoList">Todo List</h1>
                <input
                    data-testid="todoInput"
                    type="text"
                    placeholder="Add Todo"
                    ref={addTodoRef}
                />
                <button data-testid="addButton" onClick={addItem}>
                    Add Todo
                </button>
                <ul>
                    {todos.map((item) => (
                        <li key={item.id}>
                            <TodoItem
                                toggle={toggleItem}
                                remove={removeItem}
                                item={item}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    },
    {
        props: PropTypes.shape({
            list: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    id: PropTypes.number.isRequired,
                    complete: PropTypes.bool.isRequired,
                }),
            ),
        }),
    },
);
