import React, {useState} from 'react';
import './App.css';
import Templete from '../src/components/Template'
import TodoList from '../src/components/TdoList'
import TodoInsert from '../src/components/TodoInsert'

const App = () => {
  const [insertTodo, sertInserTodo] = useState(false);
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
    sertInserTodo(prev => !prev)
  }

  return(
  <Templete onInsertToogle ={onInsertToogle}>
    <TodoList todos={todos} />
    {insertTodo && <TodoInsert onInsertToogle ={onInsertToogle}/>}
  </Templete> 
  )
}

export default App;
