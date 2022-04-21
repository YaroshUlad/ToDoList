import React, {ChangeEvent} from 'react';
import {Input} from "./Input/Input";
import {MapTasks} from "./MapTasks/MapTasks";
import {v1} from "uuid";
import {ObjectsInTaskArrayType} from "../../Components4week/App4Week";
import {Button} from "./Button/Button";

type ToDoListPropsType = {
    toDoListTitle: string
    /*data: Array<ObjectsInTaskArrayType>
    id: string*/

}

export const ToDoList: React.FC<ToDoListPropsType> = ({
                                                          toDoListTitle
                                                      }) => {
    const newTaskNameHandler = (value: string) => {
        console.log(value, ' from todo') // ___________ receive new Task name from input
    }

    const checkBoxOnChange = (e: boolean, id: string) => {
        console.log(e, ' from todo')
    }
    const deleteTaskId = (id: string) => {
        console.log(id, 'from todo')
    }
    const setFilterValue = (filterValue: 'All' | 'Active' | 'Completed') => {
        console.log(filterValue, ' filetValue from Todo')
    }


    return (
        <div>
            <h3>{toDoListTitle}</h3>
            <Input newTaskName={newTaskNameHandler}/>
            <MapTasks deleteTaskHandler={deleteTaskId} checkBoxOnChangeCallBack={checkBoxOnChange} data={arr}/>
            <div>
                <Button value={'All'} onClick={() => setFilterValue('All')}/>
                <Button value={'Active'} onClick={() => setFilterValue('Active')}/>
                <Button value={'Completed'} onClick={() => setFilterValue('Completed')}/>
            </div>
        </div>
    );
};


const arr: Array<ObjectsInTaskArrayType> = [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "Rest API", isDone: false}
]