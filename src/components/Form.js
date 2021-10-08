import React from 'react'

function Form( { setFilter, setInputText, inputText, todos, setTodos } ) {

    const setInputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setInputText("")
    }

    return (
        <form onSubmit={ (e) => submitTodoHandler(e) }>
            <input value={inputText} onChange={ (e) => setInputTextHandler(e) } type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo"
                        onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
