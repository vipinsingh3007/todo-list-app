/**
 *  Test Component for TodoList Component
 *
 *  All test cases for this component go here
 *
 */

import {render, screen} from '@testing-library/react';
import {TodoList} from '../components/todo-list';

describe('Test TodoList component', () => {
    test('renders todo list', () => {
        render(<TodoList list={[]} />);
        const todoList = screen.getByTestId('todoList');
        expect(todoList.innerHTML).toBe('TODO LIST');
    });
});
