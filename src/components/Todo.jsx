import React from 'react'
import { useGlobalContext } from '../context'

const Todo = ({ todoItem }) => {
    const { greeting, deleteHandler } = useGlobalContext()

    return (
        <div className='todo'>
            {greeting }
            <li className='todo-item'>
                { todoItem.text }
            </li>

            <button className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>

            <button onClick={ () => deleteHandler(todoItem.id) } className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo