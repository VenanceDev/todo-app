import React from 'react'

function Todo({ todo, deleteTodoHandler, completeTodoHandler }) {
    return (
        <div className={ `todo${todo.completed ? ' completed' : ''}` }>
            <li className="todo-item">{ todo.text }</li>
            <button className="complete-btn"
                    onClick={ () => completeTodoHandler(todo.id) }>
                <i  className="fas fa-check"></i>
            </button>
            <button onClick={ () => deleteTodoHandler(todo.id) } className="trash-btn">
                <i  className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
