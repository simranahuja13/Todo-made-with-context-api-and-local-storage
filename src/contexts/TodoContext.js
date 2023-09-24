import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        //   {todos as Object}
        {
            id: 1,
            todo: "Todo msg",
            completed: false, //false default value
        }
    ],
    addTodo: (todo) => { },  //(todo--todo msg) functionality will not be defined here it will defined in App.jsx only function will be written
    // context api is not used in small projects redux is used for State management.
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

})

export const useTodo = () => {
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider