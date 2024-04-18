export function ToDoItem({completed ,id , title, toggleTodo, deletetodo}){
    return   <li

    >
    <label >
        <input
            type="checkbox"
            checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
    </label>
    <button
         onClick={() => deletetodo(id)} 
        className="btn btn-danger" 
        > 
        Delete
         </button>
</li>
}