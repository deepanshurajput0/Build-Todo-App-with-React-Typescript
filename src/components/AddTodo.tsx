import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";
const AddTodo = () => {
    const [todo,setTodo] = useState('');
    const { handleAddToDo } = useTodos()
    const handleFromSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleAddToDo(todo)
    } 


  return (
    <form onSubmit={handleFromSubmit} >
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}  />
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddTodo

