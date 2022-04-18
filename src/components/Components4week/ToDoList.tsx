import React, {useState} from "react";
import {FullInput4Week} from "./FullInput/FullInput4Week";
import {Tasks4Week} from "./Tasks/Tasks4Week";
import {ObjectsInTaskArrayType} from "./App4Week";
import {UniButton} from "./UniButton/UniButton";


type ToDoList4weekPropsType = {
    title: string
    data: Array<ObjectsInTaskArrayType>
    checkboxChanger: (id: string, newIsDone: boolean) => void
    addTask: (newTaskValue: string) => void
    deleteTask: (id: string) => void
}

export const ToDoList = (props: ToDoList4weekPropsType) => {
    const setTitleValueHandler = (value: string) => {
        props.addTask(value)
    }
    const checkboxChanger = (id: string, newIsDone: boolean) => {
        props.checkboxChanger(id, newIsDone)
    }
    const deleteTask = (id: string) => {
        props.deleteTask(id)
    }
    const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All')
    let filteredTasks = props.data
    if (filter === 'Active') {
        filteredTasks = props.data.filter(el => !el.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks = props.data.filter(el => el.isDone)
    }
    return (
        <div className={s.wrapper}>
            <h3>{props.title}</h3>
            <FullInput4Week setTitleValueHandler={setTitleValueHandler}/>
            <Tasks4Week deleteTask={deleteTask}
                        checkboxChanger={checkboxChanger}
                        data={filteredTasks}/>
            <UniButton title={'All'} callBack={() => setFilter('All')}/>
            <UniButton title={'Active'} callBack={() => setFilter('Active')}/>
            <UniButton title={'Completed'} callBack={() => setFilter('Completed')}/>


        </div>
    )
}