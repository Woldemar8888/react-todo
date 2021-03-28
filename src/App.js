import './App.css';
import TodoList from "./Todo/TodoList";
import {useState} from  'react';
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

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

    function addTodo(title){
      setTodus(todos.concat([{
          title,
          id: Date.now(),
          completed: false
      }]))
    }

  return (
      <Context.Provider value={{deleteTodo}}>
          <div className="App">
              <h1>Todo list</h1>
              <AddTodo onCreate={addTodo}/>
              {todos.length ?
                  <TodoList
                      todos = {todos}
                      onToggle = {toggleTodo}
                  />
                  :
                  <p>No todos</p>
              }

          </div>
      </Context.Provider>

  );
}

export default App;
