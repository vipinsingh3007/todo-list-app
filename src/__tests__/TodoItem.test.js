/**
 *  Test Component for TodoItem Component
 *
 *  All test cases for this component go here
 *
 */

import {render, screen} from '@testing-library/react';
import {TodoItem} from '../components/todo-item';

describe('Test TodoItem component', () => {
    test('renders todo item', () => {
        render(<TodoItem />);
        const todoItem = screen.getByTestId('todoItem');
        expect(todoItem.innerHTML).toBe('TODO ITEM');
    });
});
