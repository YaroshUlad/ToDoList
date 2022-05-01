import React from 'react';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {Button} from "../Button/Button";
import {MappingTasks} from "./MappingTasks/MappingTasks";
import {MutableSpan} from "../MutableSpan/MutableSpan";

type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type ToDoListPropsType = {
    id: string
    title: string
    data: Array<TasksType>
    deleteToDoList: (toDoListId: string) => void
    renameToDoList: (newItemTitle: string, toDoListId: string) => void
    //addNewTask: (newItemTitle: string) => void
}
export type FilterValueType = 'All' | 'Completed' | 'Active'

export const ToDoList = (props: ToDoListPropsType) => {

    const newToDoListTitle = (newItemTitle: string) => {
        props.renameToDoList(newItemTitle, props.id)
    }
    const addNewTask = (newItemTitle: string) => {

    }
    const filterHandler = (filterValue: FilterValueType) => {

    }
    const deleteToDoList = () => {
        props.deleteToDoList(props.id)
    }
    return (
        <div>
            <h3>
                <MutableSpan itemTitle={props.title} newItemTitleCallBack={newToDoListTitle}/>
                <Button buttonTitle={'x'} callBack={deleteToDoList}/>
            </h3>
            <AddItemForm callBack={addNewTask}/>
            <MappingTasks data={props.data}/>
            <div>
                <Button buttonTitle={'All'} callBack={() => filterHandler('All')}/>
                <Button buttonTitle={'Active'} callBack={() => filterHandler('Active')}/>
                <Button buttonTitle={'Completed'} callBack={() => filterHandler('Completed')}/>
            </div>
        </div>
    );
}

