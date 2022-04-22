import React, {useState} from "react";
import s from './App5ThWeek.module.css'
import {ToDoList} from "./ToDoList/ToDoList";
import {v1} from "uuid";
import {Button} from "./ToDoList/Button/Button";

const App5ThWeek = () => {
    let a = v1()
    let b = v1()

    const [lists, setLists] = useState([{id: a, title: 'What to Learn'},
        {id: b, title: 'What to Buy'}])

    const [dataList, setDataList] = useState({
        [a]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "Rest API", isDone: false}
        ],
        [b]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Book", isDone: true}]
    })
    const addNewTask = (newTaskValue: string, toDoListId: string) => {
        let newTask = {id: v1(), title: newTaskValue, isDone: false}
        dataList[toDoListId] = [newTask, ...dataList[toDoListId]]
        setDataList({...dataList})
    }
    const isDonePropertyChanger = (newIsDone: boolean, taskId: string, toDolistId: string) => {
        dataList[toDolistId].map(el => {
            if (el.id === taskId) {
                el.isDone = newIsDone
            }
            return el
        })
        setDataList({...dataList})
    }

    const deleteTask = (taskId: string, toDoListId: string) => {
        dataList[toDoListId] = dataList[toDoListId].filter(el => el.id !== taskId)
        setDataList({...dataList})
    }
    const deleteList = (toDoListId: string) => {
        let filteredLists = lists.filter(el => el.id !== toDoListId)
        console.log(filteredLists)
        setLists(filteredLists)
        delete dataList[toDoListId]
        setDataList({...dataList})
    }


    return (
        <div className={s.AppWrapper}>
            
            {lists.map(el => {
                return <ToDoList deleteList={deleteList}
                                 deleteTask={deleteTask}
                                 isDonePropertyChanger={isDonePropertyChanger}
                                 addNewTask={addNewTask}
                                 data={dataList[el.id]}
                                 key={el.id}
                                 tdid={el.id}
                                 toDoListTitle={el.title}/>
            })}

        </div>
    )
}
export default App5ThWeek