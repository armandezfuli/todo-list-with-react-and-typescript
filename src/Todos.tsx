import { useState } from "react"
import Todo, { TodoProps } from "./components/Todo/Todo"
import AddTodo from "./components/AddTodo/AddTodo"
import "./todos.scss"

const Todos = () => {
    const [todos, setTodos] = useState<TodoProps[]>([])

    const addTodoHandler = (text: string) => {
        setTodos((t) => [
            ...t,
            {
                id: crypto.randomUUID(),
                text,
                isCompleted: false,
            },
        ])
    }

    {
        /* 
    const removeHandler = () => {}
    const isCompleted = () => {} 
*/
    }

    return (
        <div className="todos flex column center-y">
            <AddTodo getTextFromUser={addTodoHandler} />
            <div className="todoContainer flex column center-y">
                {todos ? todos.map((t) => <Todo key={t.id} {...t} />) : null}
            </div>
        </div>
    )
}

export default Todos
