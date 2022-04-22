import React, {ChangeEvent, useState} from 'react';
import {Input} from "./Input/Input";
import {MapTasks} from "./MapTasks/MapTasks";
import {v1} from "uuid";
import {ObjectsInTaskArrayType} from "../../Components4week/App4Week";
import {Button} from "./Button/Button";
import s from './ToDolist.module.css'

type ToDoListPropsType = {
    toDoListTitle: string
    data: Array<ObjectsInTaskArrayType>
    tdid: string
    addNewTask: (newTaskValue: string, toDoListId: string) => void
    isDonePropertyChanger: (newIsDone: boolean, taskId: string, toDolistId: string) => void
    deleteTask: (taskId: string, toDoListId: string) => void
    deleteList: (toDoListId: string) => void
}

export const ToDoList: React.FC<ToDoListPropsType> = ({
                                                          toDoListTitle,
                                                          tdid,
                                                          data,
                                                          addNewTask, isDonePropertyChanger,
                                                          deleteTask, deleteList
                                                      }) => {
    const [filterValue, setFilterValue] = useState<'All' | 'Active' | 'Completed'>('All')
    let filteredData = data
    if (filterValue === 'Active') {
        filteredData = data.filter(el => !el.isDone)
    }
    if (filterValue === 'Completed') {
        filteredData = data.filter(el => el.isDone)
    }

    const newTaskNameHandler = (value: string) => {
        addNewTask(value, tdid)
    }

    const checkBoxOnChange = (e: boolean, id: string) => {
        isDonePropertyChanger(e, id, tdid)
    }
    const deleteTaskId = (id: string) => {
        deleteTask(id, tdid)
    }

    return (
        <div className={s.todolistWrap}>
            <Button onClick={() => deleteList(tdid)} value={'x'}/>
            <h3>{toDoListTitle}</h3>
            <Input newTaskName={newTaskNameHandler}/>
            <MapTasks deleteTaskHandler={deleteTaskId} checkBoxOnChangeCallBack={checkBoxOnChange} data={filteredData}/>
            <div className={s.buttonArea}>
                <Button className={filterValue === 'All' ? s.activeFilter : ''}
                        value={'All'}
                        onClick={() => setFilterValue('All')}/>
                <Button className={filterValue === 'Active' ? s.activeFilter : ''}
                        value={'Active'}
                        onClick={() => setFilterValue('Active')}/>
                <Button className={filterValue === 'Completed' ? s.activeFilter : ''}
                        value={'Completed'}
                        onClick={() => setFilterValue('Completed')}/>
            </div>
        </div>
    );
};
