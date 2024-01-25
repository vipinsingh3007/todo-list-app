import todos from './todos';

const initState = {
    todos: [],
};
function rootReducer(state = initState, action) {
    if (action) {
        return {
            ...state,
            todos: todos(state.todos, action),
        };
    }
    return state;
}

export default rootReducer;
