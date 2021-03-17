import React from 'react'
import { todo_status, useGlobalContext } from '../context'

const Form = () => {
    const { inputTxt, setInputTxt, todoSubmitHandler, statusChangeHandler } = useGlobalContext()

    return (
        <form onSubmit={ (evt) => todoSubmitHandler(evt) }>
            <input type='text'
                value={ inputTxt }
                className='todo-input'
                onChange={ (evt) => setInputTxt(evt.target.value) }
            />

            <button className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>

            <div className='select'>
                <select
                    name='todos'
                    className='filter-todo'
                    onChange={ (event) => statusChangeHandler(event) }>
                    <option value={ `${ todo_status.ALL }` }>
                        All
                    </option>
                    <option value={ `${ todo_status.COMPLETED }` }>
                        Completed
                    </option>
                    <option value={ `${ todo_status.INCOMPLETE }` }>
                        Incomplete
                    </option>
                </select>
            </div>
        </form>
    )
}

export default Form