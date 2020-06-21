import React from 'react';
import './Template.css'

const TodoItem =({todo, onInsertToogle, onSelectedchangedTodo}) =>{
    const { text } = todo;
    return(
        <div className="Todo_View" 
        onClick={()=>{
            onInsertToogle();
            onSelectedchangedTodo(todo);
            }} >
            <input type="checkbox"  />
            {text}
        </div>

    )
}

export default TodoItem;