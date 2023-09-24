
import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])


  const addTodo = (todo) => //name should be same as wriiten in TodoProvider{{addTodo}}
  {
    // setTodos((prevTodo)=>[todo ,  ...prevTodo])
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) // todo is object
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))//todo is new todo //prevTodo is individual todo

    // --- Can be also wriiten in this way ---
    // prev.map((eachVal)=>{
    //   if(eachVal.id === id){
    //     eachVal= todo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  
  useEffect(() => {
    const data = localStorage.setItem("todos", JSON.stringify(todos)) //// set - both values & keys
  //  console.log(data)
    }, [todos])
  
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) // get - only values no keys // string 
    // console.log(todos);
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* ()--auto return */}
            {todos.map((todo) => (
              <div key = {todo.id}
              className='w-full' >
             <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
