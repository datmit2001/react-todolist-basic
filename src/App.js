import FormTodo from "./components/FormTodo";
import List from "./components/List";
import { useState, useEffect } from 'react'
import { v4 } from "uuid";
const TODO_APP_STORAGE_KEY = "TODO_APP"
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
   const localStorageTodoApp = localStorage.getItem(TODO_APP_STORAGE_KEY);
   if(localStorageTodoApp){
      setTodos(JSON.parse(localStorageTodoApp));
   }
  },[])
  useEffect(() => {
   localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todos))
  },[todos])


  const onHandleAdd = (item) => {
    setTodos([...todos, { id: v4(), name: item }])
  }
  const onHandleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="todolist">
      <h3>Todo List</h3>
      <FormTodo onAdd={onHandleAdd} />
      <List data={todos} onDelete={onHandleDelete} />
    </div>
  );
}

export default App;
