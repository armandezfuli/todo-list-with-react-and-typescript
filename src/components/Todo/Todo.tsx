import React, { useState, useRef } from "react"
import "./todo.scss"

export type TodoProps = {
    id: string | number
    text: string
    isCompleted: boolean
    deleteTodo?: (id: string | number) => void
    completedTodo?: (id: string | number) => void
    editTodo?: (id: string | number , newText: string ) => void
}

const Todo: React.FC<TodoProps> = ({
    id,
    text,
    isCompleted,
    deleteTodo,
    completedTodo,
    editTodo
}) => {
    const [edit, setEdit] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const deleteTodoHandler = () => {
        if (deleteTodo) {
            deleteTodo(id)
        }
    }

    const isCompletedTodo = () => {
        if (completedTodo) {
            completedTodo(id)
        }
    }

    const editHandler = () => {
        if(editTodo && inputRef.current) {
            editTodo(id, inputRef.current?.value)
            setEdit(false)
        }
    }

    return (
        <div className={isCompleted ? "todo done" : "todo"}>
            {edit ? (
                <div className="editContainter">
                    <input type="text" defaultValue={text} ref={inputRef} />
                    <button onClick={editHandler}>Edit</button>
                    <button onClick={() => setEdit(false)}>Cancel</button>
                </div>
            ) : (
                <>
                    <h2>{text}</h2>
                    <button className="doneBtn" onClick={isCompletedTodo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="15"
                            viewBox="0 -960 960 960"
                            width="15">
                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                        </svg>
                    </button>
                    <button className="editBtn" onClick={() => setEdit(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="15"
                            viewBox="0 -960 960 960"
                            width="15">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                        </svg>
                    </button>
                    <button className="deleteBtn" onClick={deleteTodoHandler}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="15"
                            viewBox="0 -960 960 960"
                            width="15">
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    )
}

export default Todo
