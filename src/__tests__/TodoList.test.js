/**
 *  Test Component for TodoList Component
 *
 *  All test cases for this component go here
 *
 */

import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {TodoList} from '../components/todo-list';

describe('Test TodoList component', () => {
    let store;
    const initialState = {todos: []};
    const mockStore = configureStore();
    let TodoListTestComponent;

    beforeEach(() => {
        store = mockStore(initialState);
        TodoListTestComponent = function () {
            return (
                <Provider store={store}>
                    <TodoList />
                </Provider>
            );
        };
    });

    test('renders the header Todo List', () => {
        render(<TodoListTestComponent />);
        const todoList = screen.getByTestId('todoList');
        expect(todoList.innerHTML).toBe('Todo List');
    });

    test('renders a input field todo with placeholder', () => {
        render(<TodoListTestComponent />);
        const todoInput = screen.getByTestId('todoInput');
        const inputPlaceholder = screen.getByPlaceholderText('Add Todo');
        expect(todoInput).toBeTruthy();
        expect(inputPlaceholder).toBeTruthy();
    });

    test('renders a button to add items to todo list', () => {
        render(<TodoListTestComponent />);
        const addButton = screen.getByTestId('addButton');
        expect(addButton).toBeTruthy();
        expect(addButton.innerHTML).toBe('Add Todo');
    });
});
