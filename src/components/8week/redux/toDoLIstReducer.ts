import {v1} from "uuid";
import {ActionType} from "./store";

export type FilterType = 'All' | 'Active' | 'Completed'
type tdlType = {
    id: string
    title: string
    filter: FilterType
}
export type toDoListsType = tdlType[]


export type TDLReducerActionType =
    AddNewTDLActionType
    | renameTDLActionType
    | SetNewFilterActionType
    | RemoveTDLActionType


export type AddNewTDLActionType = {
    type: string,
    payload: {
        newToDoListTitle: string
    }
}
const ADD_NEW_TODOLIST = 'ADD_NEW_TODOLIST'
export const addNewTodolistAC = (newToDoListTitle: string) => {
    return {
        type: ADD_NEW_TODOLIST,
        payload: {
            newToDoListTitle
        }
    }
}

type renameTDLActionType = {
    type: string,
    payload: {
        tdlId: string
        newTDLName: string
    }
}
const RENAME_TODOLIST = 'RENAME_TODOLIST'
export const renameToDoListAC = (tdlId: string, newTDLName: string) => {
    return {
        type: RENAME_TODOLIST,
        payload: {
            tdlId,
            newTDLName
        }
    }
}

type SetNewFilterActionType = {
    type: string,
    payload: {
        tdlId: string
        newFilterValue: FilterType
    }
}
const SET_NEW_FILTER = 'SET_NEW_FILTER'
export const setNewFilterAC = (tdlId: string, newFilterValue: FilterType) => {
    return {
        type: SET_NEW_FILTER,
        payload: {
            tdlId,
            newFilterValue
        }
    }
}

type RemoveTDLActionType = {
    type: string,
    payload: {
        tdlId: string
    }
}
const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
export const removeToDoListAC = (tdlId: string) => {
    return {
        type: REMOVE_TODOLIST,
        payload: {
            tdlId
        }
    }
}

const initialState: toDoListsType = []

export const toDoLIstReducer = (state: toDoListsType = initialState, action: ActionType): toDoListsType => {
    switch (action.type) {
        case ADD_NEW_TODOLIST:
            const newToDoList = {
                id: v1(),
                title: action.payload.newToDoListTitle,
                filter: 'All' as const
            }
            return [...state.concat(newToDoList)]
        case RENAME_TODOLIST:
            const tdlId = action.payload.tdlId
            const newTDLName = action.payload.newTDLName
            return [...state.map(el => el.id === tdlId ? {...el, title: newTDLName} : el)]
        case SET_NEW_FILTER:
            const tdlId1 = action.payload.tdlId
            const newFilterValue = action.payload.newFilterValue
            return [...state.map(el => el.id === tdlId1 ? {...el, filter: newFilterValue} : el)]
        case REMOVE_TODOLIST:
            const tdlId2 = action.payload.tdlId
            return [...state.filter(el => el.id !== tdlId2)]
        default:
            return state
    }
}