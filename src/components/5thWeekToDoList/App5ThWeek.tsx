import React from "react";
import s from './App5ThWeek.module.css'
import {ToDoList} from "./ToDoList/ToDoList";

const App5ThWeek = () => {
    return (
        <div className={s.AppWrapper}>
            App
            <ToDoList toDoListTitle={'What to Learn'}/>
        </div>
    )
}
export default App5ThWeek