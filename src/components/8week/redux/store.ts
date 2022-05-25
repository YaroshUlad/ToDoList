import {combineReducers, createStore} from "redux";
import {TDLReducerActionType, toDoLIstReducer} from "./toDoLIstReducer";
import {TaskReducerActionType, tasksReducer} from "./tasksReduser";
import {helpingReducer, HelpReducerActionType} from "./helpingReducer";

export type ActionType = { type: string, payload: { [key: string]: any } } /*TDLReducerActionType & TaskReducerActionType & HelpReducerActionType*/

const rootReducer = combineReducers({
    toDoLists: toDoLIstReducer,
    tasks: tasksReducer,
    other: helpingReducer
})

export const store = createStore(rootReducer)



