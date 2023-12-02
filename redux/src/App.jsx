import { useState } from 'react'
import AddTodo from './Component/Addtodo' 
import Todos from './Component/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> u r learning  redux tool kit</h1>
     <AddTodo/>
     <Todos/>
     
    </>
  )
}

export default App
