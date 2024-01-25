import './App.css';
import {TodoItem} from './components/todo-item';
import {TodoList} from './components/todo-list';

function App() {
    return (
        <div className="App">
            <header>Todo List App</header>
            <section>
                <TodoList list={[<TodoItem />, <TodoItem />]} />
            </section>
        </div>
    );
}

export default App;
