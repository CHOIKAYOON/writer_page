import React, {useState, useEffect} from 'react';
import './TodoInsert.css'

const TodoInsert = ({onInsertToogle, onInsertTodo, selecteTodo}) =>{
    const [value, setVlaue] = useState("");
    const onChange =(e)=> {setVlaue(e.target.value)};

    const onSubmit = (e) => {
        e.stopPropagation();
        onInsertTodo(value);
        setVlaue("");
        onInsertToogle();
    }

    useEffect(()=>{
        if(selecteTodo){
            setVlaue(selecteTodo.text)
        }else{
            setVlaue("")
        }
    }, [selecteTodo]);


    return (
        <div>
           <div className="background" onClick={onInsertToogle}></div>
                <form onSubmit={onSubmit}>
                    <input 
                    placeholder="입력해주세요" 
                    value={value} 
                    onChange ={onChange}
                    /><br></br>
                    <button type="submit">
                        저장
                    </button>
                </form>
            </div>

    )
}

export default TodoInsert;