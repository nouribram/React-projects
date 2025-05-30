import { TodoCard } from "./TodoCard";

export function TodoList(props) {
      
    const { todos } = props
    const tab = 'Open'
    const  filterTodoList = tab === 'All' ? 
    todos : 
    tab === 'Completed' ? 
    todos.filter(val => val.complete):
    todos.filter(val => !val.complete)

    return (
        <>
         {todos.map((todo, todoIndex) => {
          return (
            <TodoCard
             key={todoIndex}
            todoIndex={todoIndex} 
            todo={todo}/>
          )
       })}

        </>
    )
}