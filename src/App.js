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
