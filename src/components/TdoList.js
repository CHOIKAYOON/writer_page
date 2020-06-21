import React from 'react';
import TodoItem from './TodoItem'
// import './Template.css'

const TodoList = ({ todos, onInsertToogle, onSelectedchangedTodo }) => {
    return(
        <div className="Content_Column_View">
            {todos.map(todo => (
                <TodoItem 
                    todo ={todo} 
                    key={todo.id} 
                    onInsertToogle={onInsertToogle}
                    onSelectedchangedTodo={onSelectedchangedTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;