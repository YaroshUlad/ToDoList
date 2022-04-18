import React, {useState} from "react";
import {ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type ObjectsInTaskArrayType = {
    id: string
    title: string
    isDone: boolean
}

export type DataType = {
    data: Array<ObjectsInTaskArrayType>
}

const arr: Array<ObjectsInTaskArrayType> = [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "Rest API", isDone: false}
]

const App4Week = () => {
    const [data, setData] = useState(arr)
    const checkboxChanger = (id: string, newIsDone: boolean) => {
        setData(data.map(el => {
            if (el.id === id) {
                el.isDone = newIsDone
            }
            return el
        }))
    }
    const addTask = (newTaskValue: string) => {
        let newTask = {id: v1(), title: newTaskValue, isDone: false}
        setData([newTask, ...data])
    }
    const deleteTask = (id: string) => {
        setData(data.filter(el => el.id !== id))
    }
    return (
        <div>
            App
            <ToDoList deleteTask={deleteTask}
                      addTask={addTask}
                      checkboxChanger={checkboxChanger}
                      title={'4 week'} data={data}/>
        </div>
    )
}

export default App4Week