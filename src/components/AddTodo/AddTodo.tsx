import React from 'react'
import "./addTodo.scss"

const AddTodo: React.FC = () => {

  return (
    <div className='addTodo'>
        <h1>Add Todo</h1>
        <form>
            <input type="text" placeholder="Add Todo" />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddTodo
