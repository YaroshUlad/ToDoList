import React from 'react';
import {AddItemForm} from "../AddItemForm/AddItemForm";

export type ToDoListPropsType = {
    addNewTask: (newItemTitle: string) => void
}

export const ToDoList = () => {
    const addNewTask = (newItemTitle: string) => {

    }

    return (
        <div>
            TodoList
            <h3>What To Learn</h3>
            <AddItemForm callBack={addNewTask}/>
        </div>
    );
}