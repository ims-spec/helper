import React from 'react'
import { useSelector } from 'react-redux'

export default function TodosInfo() {
  const todos = useSelector(state=>state.todos.todos)

  return (
    <div>
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <h1>You have <span className='text-success'>{todos.length}</span> todos</h1>
            <button className='btn btn-primary'>Create task</button>
        </div>
    </div>
  )
}
