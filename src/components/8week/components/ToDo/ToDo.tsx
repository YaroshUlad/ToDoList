import React from 'react';
import {MutableSpan} from "../MutableSpan";
import {addNewTaskAC, TaskType} from "../../redux/tasksReduser";
import {ActionType} from "../../redux/store";
import {renameToDoListAC} from "../../redux/toDoLIstReducer";
import {AddNewItem} from "../addNewItem";
import {titleForNewTaskAC} from "../../redux/helpingReducer";
import MapTasks from "./MapTasks";

type ToDoPropsType = {
    tdlId: string
    tdlTitle: string
    tasks: TaskType[]
    titleForNewTask: string
    dispatch: (action: ActionType) => void
}

export const ToDo = (props: ToDoPropsType) => {
    const renameTDL = (newTitleValue: string) => {
        props.dispatch(renameToDoListAC(props.tdlId, newTitleValue))
    }
    const setValueForNewTask = (newValue: string) => {
        props.dispatch(titleForNewTaskAC(newValue))
    }
    const addNewTask = (value: string) => {
        props.dispatch(addNewTaskAC(props.tdlId, value))
    }
    return (
        <div>
            <h1>
                <MutableSpan titleValue={props.tdlTitle}
                             renameCallback={renameTDL}/>
            </h1>
            <AddNewItem newItemValue={props.titleForNewTask}
                        setNewItem={setValueForNewTask}
                        addNewItem={addNewTask}/>
            <MapTasks/>
        </div>
    );
};
