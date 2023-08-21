
import { useState } from "react";

function App (){
const [todoList,setTodoList] = useState([
  {id:1,todo:'Buy some milk'},
  {id:2, todo:"Do my homework"}
])
 const [newList,setNewList] = useState("")

 const handleChange = (e)=>{
   setNewList(e.target.value)
 }


const handleSubmit = (e)=>{
  e.preventDefault();
  const copyTodoList = [...todoList]
  const id = new Date().getTime()
  const todo = newList
  copyTodoList.push({id,todo})
  setTodoList(copyTodoList)
  setNewList("")
}

const  handleDelete = (id)=>{

  const copyTodoList= [...todoList]
  const toDisplay = copyTodoList.filter((elm)=> elm.id !== id)
  return setTodoList(toDisplay)

}



return(
  <div>
<h1>Todo's</h1>
  <ul>
   { todoList.map((elm)=>{
    return <li key={elm.id} onClick={()=>handleDelete(elm.id)} style={{cursor:"pointer"}}>{elm.todo}</li>
   })
   } 
  </ul>

  <form onSubmit={handleSubmit}>
    <input type='text' value={newList} onChange={handleChange}/>
  </form>
  </div>
  
)






}

export default App;