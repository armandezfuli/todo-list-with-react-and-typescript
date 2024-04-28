import React from "react"
import Todo from "./components/Todo/Todo"
import AddTodo from "./components/AddTodo/AddTodo"
import "./todos.scss"

const Todos: React.FC = () => {
    return (
        <div className="todos flex column center-y">
            <AddTodo />
            <div className="todoContainer flex column center-y">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    )
}

export default Todos
