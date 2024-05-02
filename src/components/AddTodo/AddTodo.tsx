import React, { useRef } from "react"
import "./addTodo.scss"

interface AddTodoProps {
    getTextFromUser: (text: string) => void
}

const AddTodo: React.FC<AddTodoProps> = ({ getTextFromUser }) => {
    const inputElementRef = useRef<HTMLInputElement | null>(null)

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (inputElementRef.current && inputElementRef.current.value !== "") {
            getTextFromUser(inputElementRef.current.value)
            inputElementRef.current.value = ""
            inputElementRef.current.focus()
        }
    }

    return (
        <div className="addTodo">
            <h1>Add Todo</h1>
            <form onSubmit={submitHandler}>
                <input ref={inputElementRef} type="text" placeholder="Add Todo" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTodo
