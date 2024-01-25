export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    };
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    };
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    };
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id));
    };
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        dispatch(addTodo(name));
        cb();
    };
}

export function handleToggle(id) {
    return (dispatch) => {
        dispatch(toggleTodo(id));
    };
}
