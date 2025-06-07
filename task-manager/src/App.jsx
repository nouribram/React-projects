import { Header } from "./components/Header"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { Tabs } from "./components/Tabs"
import { useState } from "react"


function App() {
 
  /*const todos = [
   
    { input: 'Hello! add your first Todo', complete: false},
    { input: 'Hello! add your first Todo', complete: false},
    { input: 'Hello! add your first Todo', complete: true},
    
    ]*/

    const [todos, setTodos] = useState([ 
      { input: 'Hello! add your first Todo', complete: true}
    
    ])

    const {selectedTab, setSelectedTab}  = useState('Open')

    function handleAddTodo(newTodo) {
      const newTodoList = [...todos, {input: newTodo, complete: 
      false}]
      setTodos(newTodoList)
    }

    function handleEditTodo() {
   
      function handleDeleteTodo() {

      }
    }

   

  return (
   
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>

    </>
  )
}

export default App
