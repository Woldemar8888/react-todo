import './App.css';
import TodoList from "./Todo/TodoList";
import {useState} from  'react';

function App() {
    let [todos, setTodus] = useState( [
        {id:1, completed: true, title: 'buy some bread'},
        {id:2, completed: false, title: 'walk'},
        {id:3, completed: false, title: 'sleep'},
    ]);

    function toggleTodo(id){
        setTodus(todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }

    function deleteTodo(id){
        setTodus(todos.filter(todo => todo.id !== id ))
    }

  return (
    <div className="App">
        <h1>Todo list</h1>
        <TodoList
          todos = {todos}
          onToggle = {toggleTodo}
          delete = {deleteTodo}
        />
    </div>
  );
}

export default App;
