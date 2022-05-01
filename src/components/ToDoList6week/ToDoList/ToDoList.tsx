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
    filterChanger: (filter: FilterValueType, toDoListId: string) => void
    removeTask: (taskId: string, toDoListId: string) => void
    addNewTask: (taskTitle: string, toDoListId: string) => void
    deleteToDoList: (toDoListId: string) => void
    renameToDoList: (newItemTitle: string, toDoListId: string) => void
    isDoneChanger: (taskId: string, newIsDone: boolean, toDoListId: string) => void
    renameTask: (taskId: string, newTaskTitle: string, toDoListId: string) => void
    //addNewTask: (newItemTitle: string) => void
}
export type FilterValueType = 'All' | 'Completed' | 'Active'

export const ToDoList = (props: ToDoListPropsType) => {

    const newToDoListTitle = (newItemTitle: string) => {
        props.renameToDoList(newItemTitle, props.id)
    }
    const addNewTask = (newItemTitle: string) => {
        props.addNewTask(newItemTitle, props.id)
    }
    const filterHandler = (filterValue: FilterValueType) => {
        props.filterChanger(filterValue, props.id)
    }
    const deleteToDoList = () => {
        props.deleteToDoList(props.id)
    }
    const removeTask = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }
    const isDoneChanger = (taskId: string, newIsDone: boolean) => {
        props.isDoneChanger(taskId, newIsDone, props.id)
    }
    const renameTask = (taskId: string, newTaskTitle: string) => {
        props.renameTask(taskId, newTaskTitle, props.id)
    }
    return (
        <div>
            <h3>
                <MutableSpan itemTitle={props.title} newItemTitleCallBack={newToDoListTitle}/>
                <Button buttonTitle={'x'} callBack={deleteToDoList}/>
            </h3>
            <AddItemForm callBack={addNewTask}/>
            <MappingTasks renameTask={renameTask} isDoneChanger={isDoneChanger} removeTask={removeTask}
                          data={props.data}/>
            <div>
                <Button buttonTitle={'All'} callBack={() => filterHandler('All')}/>
                <Button buttonTitle={'Active'} callBack={() => filterHandler('Active')}/>
                <Button buttonTitle={'Completed'} callBack={() => filterHandler('Completed')}/>
            </div>
        </div>
    );
}

