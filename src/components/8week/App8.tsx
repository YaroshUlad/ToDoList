import React from 'react';
import {addNewTodolistAC, toDoListsType} from "./redux/toDoLIstReducer";
import {TasksStateType} from "./redux/tasksReduser";
import {HelpingReducerInitialStateType, newTdlTitleForAddAC} from "./redux/helpingReducer";
import {AddNewItem} from "./components/addNewItem";
import {ActionType} from "./redux/store";
import {ToDo} from "./components/ToDo/ToDo";


type StoreType = {
    toDoLists: toDoListsType
    tasks: TasksStateType
    other: HelpingReducerInitialStateType
}
type PropsType = {
    state: StoreType
    dispatch: (action: ActionType) => void
}

const App8 = (props: PropsType) => {
    const addNewTDL = (newToDoListTitle: string) => {
        props.dispatch(addNewTodolistAC(newToDoListTitle))
    }
    const setNewItem = (value: string) => {
        props.dispatch(newTdlTitleForAddAC(value))
    }
    return (
        <div>
            <AddNewItem newItemValue={props.state.other.newTodolistTitleForAdd}
                        setNewItem={setNewItem} addNewItem={addNewTDL}/>
            {props.state.toDoLists.length === 0
                ? <span>ADD YOUR FIRST LIST</span>
                : props.state.toDoLists.map(el => {
                    let tasksFoTDL = props.state.tasks[el.id]
                    if (el.filter === 'Active') {
                        tasksFoTDL = tasksFoTDL.filter(el => !el.isDone)
                    }
                    if (el.filter === 'Completed') {
                        tasksFoTDL = tasksFoTDL.filter(el => el.isDone)
                    }
                    return <ToDo tdlId={el.id}
                                 tdlTitle={el.title}
                                 tasks={tasksFoTDL}
                                 dispatch={props.dispatch}
                                 key={el.id}
                                 titleForNewTask={props.state.other.titleForNewTask}/>
                })}

        </div>
    );
};

export default App8;