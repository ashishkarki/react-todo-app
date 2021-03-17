import React from 'react'
import { useGlobalContext } from '../context'
import Todo from './Todo'

const TodoList = () => {
    const { filteredTodos } = useGlobalContext()

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(todo => {
                        return <Todo key={ todo.id } todoItem={ todo } />
                    })
                }
                <li>

                </li>
            </ul>
        </div>
    )
}

export default TodoList