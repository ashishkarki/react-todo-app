import React from 'react'
import { useGlobalContext } from '../context'

const Todo = ({ todoItem }) => {
    const { todoDeleteHandler, todoCompleteHandler } = useGlobalContext()

    return (
        <div className='todo'>
            <li className={ `todo-item ${ todoItem.completed ? 'completed' : '' }` }>
                { todoItem.text }
            </li>

            <button
                onClick={ () => todoCompleteHandler(todoItem.id) }
                className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>

            <button
                onClick={ () => todoDeleteHandler(todoItem.id) } className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo