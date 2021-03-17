import React, { useContext, useEffect, useState } from 'react'

export const todo_status = {
    ALL: 'all',
    COMPLETED: 'completed',
    INCOMPLETE: 'incomplete',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [ inputTxt, setInputTxt ] = useState('')
    const [ todos, setTodos ] = useState([])
    const [ filteredTodos, setFilteredTodos ] = useState([])
    const [ status, setStatus ] = useState(todo_status.ALL)

    const todoDeleteHandler = (deleteTodoId) => {
        setTodos(
            todos.filter(todo => todo.id !== deleteTodoId)
        )
    }

    const todoSubmitHandler = (evt) => {
        evt.preventDefault()

        setTodos(existingTodos => {
            const updatedTodos = [
                ...existingTodos,
                {
                    text: inputTxt,
                    completed: false,
                    id: new Date().getTime(),
                }
            ]

            return updatedTodos
        })

        setInputTxt('')
    }

    useEffect(() => {
        __setFilteredTodos(status)
    }, [ todos ])

    const todoCompleteHandler = (completedTodoId) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === completedTodoId) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                } else {
                    return todo
                }
            })
        )
    }

    const statusChangeHandler = (event) => {
        const newStatus = event.target.value

        __setFilteredTodos(newStatus)

        setStatus(newStatus)
    }

    const __setFilteredTodos = (newStatus) => {
        switch (newStatus) {
            case todo_status.ALL:
                setFilteredTodos(todos)
                break

            case todo_status.COMPLETED:
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break

            case todo_status.INCOMPLETE:
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break

            default:
                setFilteredTodos(todos)
                break
        }
    }

    return <AppContext.Provider value={ {
        inputTxt, setInputTxt,
        todos, setTodos,
        filteredTodos,
        todoDeleteHandler,
        todoCompleteHandler,
        todoSubmitHandler,
        setStatus,
        statusChangeHandler,
    } }>
        { children }
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }