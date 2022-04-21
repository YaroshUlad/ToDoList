import React, {useState} from "react";
import s from './App5ThWeek.module.css'
import {ToDoList} from "./ToDoList/ToDoList";

const App5ThWeek = () => {
    const [lists, setLists] = useState({})

    return (
        <div className={s.AppWrapper}>
            <ToDoList toDoListTitle={'What to Learn'}/>
        </div>
    )
}
export default App5ThWeek