import TodoItems from "./TodoItems";
import Style from "./list.module.css";

export default function ToDoList({todos , setTodos}){
    const sortedTodos = todos.slice().sort((a,b) =>Number(a.done)-Number(b.done))
    return(
        <div className={Style.list}>
            {sortedTodos.map(
            (m)=><TodoItems key={m.name} items={m} setTodos={setTodos} todos={todos}/>
            )}
        </div>
    )
}