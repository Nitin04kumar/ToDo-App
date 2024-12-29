import style from "./item.module.css";

export default function TodoItems({items , setTodos , todos}){
    function handleCLick(){
        setTodos(todos.filter((todo) => todo != items))
    }

    function handleTextClick(e){
        console.log("Texed clicked",e);
        const newTodos = todos.map((todo) => todo.name === e ? {...todo,done:!todo.done }:todo);
        setTodos(newTodos);
        console.log(newTodos);
        

    }
    const classNamee = items.done ? style.completed : "";

    
    return(
    <div>    
    <div className={style.list}>
        <span className={style.listName}>
            <span className={classNamee} onClick={()=>handleTextClick(items.name)}>
            {items.name}
            </span>
                       
        </span>
        <span className={style.DeleteButton}>
        <button onClick={(item)=>handleCLick(item)} className={style.button}>x</button>
        </span>
        
    </div>
    <hr className={style.line}></hr>
    </div>);
}