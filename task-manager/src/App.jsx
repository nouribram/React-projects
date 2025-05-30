import { Header } from "./components/Header"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { Tabs } from "./components/Tabs"
 
function App() {
 
  const todos = [
    { input: 'Hello! add your first Todo', complete: true},
    { input: 'Hello! add your first Todo', complete: false},
    { input: 'Hello! add your first Todo', complete: false},
    { input: 'Hello! add your first Todo', complete: true},
    ]

  return (
   
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />

    </>
  )
}

export default App
