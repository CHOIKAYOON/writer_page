# writer_page


Hook 기반을 이해하기 위해 만든 간단한 일정 웹 어플리케이션 입니다. 

![샘플](https://user-images.githubusercontent.com/31337244/86211086-bb588400-bbb0-11ea-967d-78d2830fd2cc.JPG)
![샘플2](https://user-images.githubusercontent.com/31337244/86211089-bc89b100-bbb0-11ea-9cb9-7f3c07f21714.JPG)
-------

## 컴포넌트 구조
* Components
    * TodoList.s
    * TodoItem.js
    * Template.js
    * TodoInset.js

* App.js
* css  
-------
  
    
### `useState / useEffect 사용하여 개발 - Hook`

* TodoInset에서 useState 사용하여, 함수 자체내에서 '' 값을 넣어서 구현.
* TodoInset에서 useEffect 사용하여 일정표 값 'selecteTodo'값이 비어있으며, 새 팝업창 호출, 그게 아니면 기존에 있던 값으로 노출 되도록 구현. 
-------


## * App.js
```
import React, {useState} from 'react';
import './App.css';
import Templete from '../src/components/Template'
import TodoList from '../src/components/TdoList'
import TodoInsert from '../src/components/TodoInsert'


let nextId = 4;
const App = () => {
  const [selecteTodo , setChagedTodo] = useState(null)
  const [insertTodo, setInserTodo] = useState(false);
  const [todos, setTodos] = useState([
    {
      id : 1,
      text: '오늘 할일',
      checked : true
    },
    {
      id : 2,
      text: '오늘 할일2',
      checked : false
    },
    {
      id : 3,
      text: '오늘 할일 3',
      checked : true
    }
  ]);

  const onInsertToogle =() =>{
    setInserTodo(prev => !prev)
  }

  const onInsertTodo = (text) =>{
    if(text == ''){
      return alert("할 일을 입력해주세요.")
    }else{
      const todo ={
        id : nextId,
        text,
        checked : false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  const onSelectedchangedTodo =(todo) =>{
    setChagedTodo(todo)
  }

  return(
  <Templete onInsertToogle ={onInsertToogle}>
    <TodoList 
      todos={todos} 
      onInsertToogle={onInsertToogle}
      onSelectedchangedTodo={onSelectedchangedTodo}
      />
    {insertTodo && (
    <TodoInsert 
      onInsertToogle ={onInsertToogle}
      onInsertTodo={onInsertTodo}
      selecteTodo={selecteTodo}
    />
    )}
  </Templete> 
  )
}

export default App;
```
----

## * TodoList.js
```
import React from 'react';
import TodoItem from './TodoItem'

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
```
-----

## Template.js
```

import React from 'react';

const Templete = ({children , onInsertToogle}) =>{
    return (
        <div className="Content_Column">
            <div className="Content_item">일 정 표</div>
            <div className="Content_item2">           
                 {children}
            </div>
            <div className="Content_item3">
                <img src="https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-plus-icon-png-image_1590225.jpg" onClick={onInsertToogle} />
            </div>
        </div>
    )
}

export default Templete
```
-----

## TodoInsert.js
```
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
```
-----

## TodoItem.js
```
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
```
