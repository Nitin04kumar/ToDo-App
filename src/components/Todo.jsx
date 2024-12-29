import { useState } from "react";
import TodoItems from "./TodoItems";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function Todo(){

    const [todos , setTodos] = useState([]);
    const countCompleted = todos.filter((todos) => todos.done ).length;
    const totaltask = todos.length;
    return(<div>
        <Form todos={todos} setTodos={setTodos}/>
        <ToDoList todos={todos} setTodos={setTodos}/>
        <Footer countCompleted={countCompleted} totaltask = {totaltask}/>
    </div>);
} 