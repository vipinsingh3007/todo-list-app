/**
 *  Component TodoList
 *
 *  Represents and renders a todo list with todo items
 *
 *  mandatory props - array of list of type string
 */

import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {handleAddTodo, handleDeleteTodo, handleToggle} from '../../actions/todos';
import {TodoItem} from '../todo-item';

export default Object.assign(
    function (props) {
        const todos = useSelector((state) => state.todos);
        const dispatch = useDispatch();
        const addTodoRef = useRef();

        const addItem = (e) => {
            e.preventDefault();

            dispatch(
                handleAddTodo(addTodoRef.current.value, () => {
                    addTodoRef.current.value = '';
                }),
            );
        };

        const removeItem = (todo) => {
            dispatch(handleDeleteTodo(todo));
        };

        const toggleItem = (id) => {
            dispatch(handleToggle(id));
        };

        console.log(todos);

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
            list: PropTypes.arrayOf('string'),
        }),
    },
);
