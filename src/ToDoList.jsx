import { ToDoItem } from "./ToDoItem"

export function ToDoList({ todos ,toggleTodo, deletetodo}) {
    return (<ul className='list'>
        {todos.length === 0 && <h4>"No chores for me to do"</h4>}
        {todos.map(todo => {
            return (
                <ToDoItem 
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deletetodo={deletetodo}
                
                />

            )
        })}
    </ul>
    )
}