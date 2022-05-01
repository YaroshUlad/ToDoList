import React, {ChangeEvent} from 'react';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {v1} from "uuid";

export type ToDoListPropsType = {
    addNewTask: (newItemTitle: string) => void
}

export const ToDoList = () => {
    const Arr = [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false}
    ]
    const addNewTask = (newItemTitle: string) => {

    }

    return (
        <div>
            TodoList
            <h3>What To Learn</h3>
            <AddItemForm callBack={addNewTask}/>
            <MappingTasks data={Arr}/>
        </div>
    );
}

type TasksObjectType = {
    id: string
    title: string
    isDone: boolean
}

type MappingTasksPropsType = {
    data: Array<TasksObjectType>
}

const MappingTasks = (props: MappingTasksPropsType) => {
    return (
        <ol>
            {props.data.map((el, index) => {
                const checkBoxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    console.log(e.currentTarget.checked)
                }
                return (
                    <li key={el.id} value={index + 1}>
                        <input type="checkbox" checked={el.isDone} onChange={checkBoxOnChangeHandler}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ol>
    )
}