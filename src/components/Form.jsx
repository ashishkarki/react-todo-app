import React from 'react'
import { useGlobalContext } from '../context'

const Form = () => {
    const { inputTxt, setInputTxt, todos, setTodos } = useGlobalContext()

    const inputTxtHandler = (evt) => {
        setInputTxt(evt.target.value)
    }

    const submitHandler = (evt) => {
        evt.preventDefault()

        setTodos([
            ...todos,
            {
                text: inputTxt,
                completed: false,
                id: new Date().getMilliseconds(),
            }
        ])

        setInputTxt('')
    }

    return (
        <form onSubmit={ submitHandler }>
            <input type='text'
                value={ inputTxt }
                className='todo-input'
                onChange={ inputTxtHandler }
            />

            <button className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>

            <div className='select'>
                <select name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form