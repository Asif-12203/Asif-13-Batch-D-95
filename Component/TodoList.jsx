import { useState } from "react";


  const TodoList = () => {
    const [task,setTask]=useState("")
    const [tasks,setTasks]=useState([]);
    const addTask=()=>{
            if(task.trim()==="") return ;

        const update=[...tasks,{
id:Date.now(),
text:task,
completed:false
        }]
setTasks(update)
setTask("")
    };
    const toggleTask=(id)=>{
        setTasks(
tasks.map((item)=>item.id===id?{...item,completed:!item.completed} :item,)
);
    };

    const deleteTask=(id)=>{
        setTasks(
tasks.filter((item)=>item.id!==id))
    }
    return (
        <div className="  min-h-screen bg-gray-100 flex  justify-center items-center">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
            <div>
<h1 className=" font-bold text-2xl mb-4 ">My Todo List</h1>
<p className="mb-5 text-gray-500  ">Keep track your daily tasks</p>
</div>
            <div className=" ">
                <input type="text" name="" id="" value={task} placeholder="Enter Your Name" onChange={(e)=>{setTask(e.currentTarget.value)}} className="border border-gray-300 rounded-full text-center px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
               <button  onClick={addTask} className="bg-blue-400 rounded-2xl px-6 py-2 mx-3 hover:bg-blue-800 text-white ">Add</button>
            </div>
            <ul>
                {
                    tasks.map((item)=>(
<li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg" key={item.id} >
    <input type="checkbox" checked={item.completed} name="" id="" className="h-4 w-4 accent-blue-600" onChange={()=>toggleTask(item.id)}/>
    <span className={`flex-1 break-words ${item.completed?"line-through text-gray-400":"text-gray-700"}`} >{item.text } </span>
    <button onClick={()=>deleteTask(item.id)} className="text-red-500">Delete</button>
     </li>
                    ))
                }
            </ul>

            </div>
            
        </div>
    );
};

export default TodoList;