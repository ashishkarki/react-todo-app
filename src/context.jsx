import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const greeting = 'Greeting..'
    const [ inputTxt, setInputTxt ] = useState('')
    const [ todos, setTodos ] = useState([])

    const deleteHandler = (deleteTodoId) => {
        setTodos(
            todos.filter(todo => todo.id !== deleteTodoId)
        )
    }

    return <AppContext.Provider value={ {
        greeting,
        inputTxt, setInputTxt,
        todos, setTodos,
        deleteHandler,
    } }>
        { children }
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }