import React from 'react';
import './Template.css'

const TodoItem =({todo}) =>{
    const { text } = todo;
    return(
        <div className="Todo_View">
            <input type="checkbox"  />
            {text}
        </div>

    )
}

export default TodoItem;