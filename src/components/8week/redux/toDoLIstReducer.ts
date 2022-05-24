import {v1} from "uuid";

export type FilterType = 'All' | 'Active' | 'Completed'
type tdlType = {
    id: string
    title: string
    isDone: boolean
    filter: FilterType
}
type toDoListsType = tdlType[]
type initialStateType = {
    toDoLists: toDoListsType
    newTodolistTitleForAdd: string
    newTitleValueForToDoLists: string
}

type ActionType =
    AddNewTDLActionType
    | renameTDLActionType
    | SetNewFilterActionType
    | RemoveTDLActionType
    | SetNewToDoListTitleForAddActionType
    | NewTitleValueForToDoListsActionType

const initialState = {
    toDoLists: [],
    newTodolistTitleForAdd: '',
    newTitleValueForToDoLists: ''
}

type AddNewTDLActionType = {
    type: typeof ADD_NEW_TODOLIST,
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
    type: typeof RENAME_TODOLIST,
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
    type: typeof SET_NEW_FILTER,
    payload: {
        tdlId: string
        newFilterValue: FilterType
    }
}
const SET_NEW_FILTER = 'SET_NEW_FILTER'
export const setNewFilter = (tdlId: string, newFilterValue: FilterType) => {
    return {
        type: SET_NEW_FILTER,
        payload: {
            tdlId,
            newFilterValue
        }
    }
}

type RemoveTDLActionType = {
    type: typeof REMOVE_TODOLIST,
    payload: {
        tdlId: string
    }
}
const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
export const removeToDoList = (tdlId: string) => {
    return {
        type: REMOVE_TODOLIST,
        payload: {
            tdlId
        }
    }
}

type SetNewToDoListTitleForAddActionType = {
    type: typeof SET_NEW_TDL_TITLE_FOR_ADD
    payload: {
        newTodolistTitleForAdd: string
    }
}
const SET_NEW_TDL_TITLE_FOR_ADD = 'SET_NEW_TDL_TITLE_FOR_ADD'
export const setNewToDoListTitleForAddAC = (newTodolistTitleForAdd: string) => {
    return {
        type: SET_NEW_TDL_TITLE_FOR_ADD,
        payload: {
            newTodolistTitleForAdd
        }
    }
}

type NewTitleValueForToDoListsActionType = {
    type: typeof NEW_TITLE_VALUE_FOR_TDL
    payload: {
        newTitleValueForToDoLists: string
    }
}
const NEW_TITLE_VALUE_FOR_TDL = 'NEW_TITLE_VALUE_FOR_TDL'
export const newTitleValueForToDoListsAC = (newTitleValueForToDoLists: string) => {
    return {
        type: NEW_TITLE_VALUE_FOR_TDL,
        payload: {
            newTitleValueForToDoLists
        }
    }
}

export const toDoLIstReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ADD_NEW_TODOLIST:
            const newToDoList = {
                id: v1(),
                title: action.payload.newToDoListTitle,
                isDone: false,
                filter: 'All' as const
            }
            return {...state, toDoLists: state.toDoLists.concat(newToDoList)}
        case RENAME_TODOLIST:
            const tdlId = action.payload.tdlId
            const newTDLName = action.payload.newTDLName
            return {
                ...state,
                toDoLists: state.toDoLists.map(el => el.id === tdlId ? {...el, title: newTDLName} : el)
            }
        case SET_NEW_FILTER:
            //const tdlId = action.payload.tdlId
            const newFilterValue = action.payload.newFilterValue
            return {
                ...state,
                toDoLists: state.toDoLists.map(el => el.id === tdlId ? {...el, filter: newFilterValue} : el)
            }
        case REMOVE_TODOLIST:
            return {...state, toDoLists: state.toDoLists.filter(el => el.id !== tdlId)}
        case SET_NEW_TDL_TITLE_FOR_ADD:
            return {...state, newTodolistTitleForAdd: action.payload.newTodolistTitleForAdd}
        case NEW_TITLE_VALUE_FOR_TDL:
            return {...state, newTitleValueForToDoLists: action.payload.newTitleValueForToDoLists}
        default:
            return state
    }
}