import { useState } from "react";
import Style from "./Form.module.css"
export default function Form({todos , setTodos}){
    const [task , setTask] = useState({name:"" , done: false});
    
    

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos , task]);
        setTask({name:"" , done: false});        
    }

    return(<div className={Style.box}>
        <form className={Style.tofoform}>
            <input className={Style.modernInput} onChange={(e) => setTask({name:e.target.value , done:false})} type="text" value={task.name} placeholder="Enter todo Task"></input>
            <button className={Style.modernButton} onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    </div>)
}
