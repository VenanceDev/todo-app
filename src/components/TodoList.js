import React from 'react'
import Todo from './Todo'

function TodoList({ filter, todos, setTodos }) {

    const deleteTodoHandler = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const completeTodoHandler = (todoId) => {
        setTodos(todos.map(item => {
            if (item.id === todoId) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    const renderTodo = (filter) => {
        switch (filter) {
            case "completed":
                return todos.filter(item=>item.completed===true).map(todo => <Todo key={todo.id} todo={ todo }
                                        deleteTodoHandler={ deleteTodoHandler }
                                        completeTodoHandler={ completeTodoHandler } />)
            case "uncompleted":
                return todos.filter(item=>item.completed!==true).map(todo => <Todo key={todo.id} todo={ todo }
                                        deleteTodoHandler={ deleteTodoHandler }
                                        completeTodoHandler={ completeTodoHandler } />)
            default:
                return todos.map(todo => <Todo key={todo.id} todo={ todo }
                                        deleteTodoHandler={ deleteTodoHandler }
                                        completeTodoHandler={ completeTodoHandler } />)
        }
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {renderTodo(filter)}
            </ul>
        </div>
    )
}

export default TodoList
