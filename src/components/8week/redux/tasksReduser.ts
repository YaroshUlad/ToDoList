import {v1} from "uuid"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = {
    [tdlId: string]: TaskType[]
}

const initialState = {}

export type TaskReducerActionType =
    AddNewTaskActionType
    | RemoveTaskActionType
    | ChangeIsDoneActionType
    | ChangeTaskTitleActionType

type AddNewTaskActionType = {
    type: typeof ADD_NEW_TASK
    payload: {
        tdlId: string
        title: string
    }
}
const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const addNewTaskAC = (tdlId: string, title: string): AddNewTaskActionType => {
    return {
        type: ADD_NEW_TASK,
        payload: {
            tdlId,
            title
        }
    }
}

type RemoveTaskActionType = {
    type: typeof REMOVE_TASK
    payload: {
        tdlId: string
        taskId: string
    }
}
const REMOVE_TASK = 'REMOVE_TASK'
export const removeTaskAC = (tdlId: string, taskId: string) => {
    return {
        type: REMOVE_TASK,
        payload: {
            tdlId,
            taskId
        }
    }
}

type ChangeIsDoneActionType = {
    type: typeof CHANGE_IS_DONE_PROPERTY
    payload: {
        tdlId: string
        taskId: string
        isDone: boolean
    }
}
const CHANGE_IS_DONE_PROPERTY = 'CHANGE_IS_DONE_PROPERTY'
export const changeIsDoneAC = (tdlId: string,
                               taskId: string,
                               isDone: boolean): ChangeIsDoneActionType => {
    return {
        type: CHANGE_IS_DONE_PROPERTY,
        payload: {tdlId, taskId, isDone}
    }
}

type ChangeTaskTitleActionType = {
    type: typeof CHANGE_TASK_TITLE
    payload: {
        tdlId: string,
        taskId: string,
        title: string
    }
}
const CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE'
export const changeTaskTitleAC = (tdlId: string,
                                  taskId: string,
                                  title: string): ChangeTaskTitleActionType => {
    return {
        type: CHANGE_TASK_TITLE,
        payload: {
            tdlId,
            taskId,
            title
        }
    }
}


export const tasksReducer = (state: TasksStateType = initialState, action: TaskReducerActionType): TasksStateType => {
    switch (action.type) {
        case ADD_NEW_TASK:
            const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, [action.payload.tdlId]: [newTask].concat(state[action.payload.tdlId])}
        case REMOVE_TASK:
            return {
                ...state,
                [action.payload.tdlId]: state[action.payload.tdlId].filter(el => el.id !== action.payload.taskId)
            }
        case CHANGE_IS_DONE_PROPERTY:
            return {
                ...state,
                [action.payload.tdlId]: state[action.payload.tdlId].map(el => el.id === action.payload.taskId ?
                    {...el, isDone: action.payload.isDone} : el)
            }
        case CHANGE_TASK_TITLE:
            return {
                ...state,
                [action.payload.tdlId]: state[action.payload.tdlId].map(el => el.id === action.payload.taskId ?
                    {...el, title: action.payload.title} : el)
            }

        default:
            return state
    }
}