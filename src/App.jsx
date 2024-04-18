import { useEffect, useState } from 'react'
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';
// import './index.css';
// import './App.css'

export default function App() {

  const [todos, setTodos] = useState(()=>{
    const localValue= localStorage.getItem("ITEMS")
    if (localValue==null)return []
    return JSON.parse(localValue)
  });
  

  useEffect(()=> {
    localStorage.setItem( "ITEMS", JSON.stringify(todos))// storing the information to local storage
  },[todos]);


  function addToDo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), title, completed:
            false },
      ]
    })

  };

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo;
      })
    })
  }


  function deletetodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  console.log(todos)
  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h3 className="small-header"> My List </h3>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deletetodo={deletetodo} />
    </>
  )
}




// <li>
// <label >
//   <input type="checkbox" />
//   Item 1
// </label>
// <button className="btn btn-danger"> Delete </button>
// </li>
// <li>
// <label >
//   <input type="checkbox" />
//   Item 2

// </label>
// <button className="btn btn-danger"> Delete </button>
// </li>




//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
