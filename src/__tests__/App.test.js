import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders text todo list app', () => {
    render(<App />);
    const text = screen.getByText(/todo list app/i);
    expect(text).toBeInTheDocument();
});
