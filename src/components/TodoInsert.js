import React, {useState} from 'react';
import './TodoInsert.css'

const TodoInsert = ({onInsertToogle}) =>{
    const [value, setVlaue] = useState("");
    const onChange = e=> {setVlaue(e.target.value)};

    return (
           <div className="background" >
                <form>
                    <input 
                    placeholder="입력해주세요" 
                    value={value} 
                    onChange ={onChange}/><br></br>
                    <button className ="bnt" type="submit">
                        버튼
                    </button>
                </form>
            </div>

    )
}

export default TodoInsert;