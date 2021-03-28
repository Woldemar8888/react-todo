import './App.css';
import TodoList from "./Todo/TodoList";
import React, {useState, useEffect} from  'react';
import Context from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";
const AddTodo = React.lazy(()=> import('./Todo/AddTodo'))

function App() {
    let [todos, setTodus] = useState( []);
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodus(todos);
                setLoading(false);
            })
    },[])
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
              <React.Suspense fallback={<p>loading</p>}>
                  <AddTodo onCreate={addTodo}/>
              </React.Suspense>
              {loading && <Loader/>}
              {todos.length ?
                  (<TodoList
                      todos = {todos}
                      onToggle = {toggleTodo}
                  />)
                  :
                  loading ? null : (<p>No todos</p>)
              }
              <Modal/>
          </div>
      </Context.Provider>

  );
}

export default App;
