
import './App.css'
import {FC,useState,ChangeEvent} from "react"
import { ITask } from './interfaces'
import TodoTask from './components/TodoTask'
const App: FC= ():JSX.Element=> {
  
const [task,setTask]=useState<string>("")
const[deadline,setDeadline]=useState<number>(0)
const[todoList,setTodoList]=useState<ITask[]>([])

const handleChange=(e:ChangeEvent<HTMLInputElement>): void =>{
  if(e.target.name==="task"){
    setTask(e.target.value)
  }else{
    setDeadline(Number(e.target.value))
  }
}
const addTask=():void=>{
  const newTask={taskName:task,deadline}
  setTodoList([...todoList,newTask])
  console.log(todoList)
  setDeadline(0)
  setTask("")
}
const completeTask=(taskNameToDelete:string):void =>{
  setTodoList(todoList.filter((task)=>{
    return task.taskName !=taskNameToDelete
  }))
}
  return (
    <div className="App">
     <div className="header">
      <div className="inputContainer">
        <input type="text" placeholder="Task" name="task" value={task} onChange={handleChange}/>
        <input type="number" placeholder="deadline.." name="deadline" value={deadline} onChange={handleChange}/>
      </div>
      <button onClick={addTask}>Add task</button>
     </div>
     <div className="todoList">
      {todoList.map((task:ITask,index:number)=>{
        return <TodoTask task={task}key={index} completeTask={completeTask}/>
      })}
     </div>
    </div>
  )
}

export default App
