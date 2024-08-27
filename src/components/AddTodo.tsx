import { FormEvent, useState } from "react"

const AddTodo = () => {
    const [todo,setTodo] = useState('');
    const [todoList, setTodoList] = useState<string[]>([])
    const handleFromSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setTodoList([...todoList, todo])
        console.log(todoList)
    } 


  return (
    <form onSubmit={handleFromSubmit} >
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}  />
        <button type="submit" >Add</button>
    </form>
  )
}

export default AddTodo

