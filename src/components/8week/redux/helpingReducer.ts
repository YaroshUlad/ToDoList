export type HelpingReducerInitialStateType = {
    newTodolistTitleForAdd: string
    newTitleValueForToDoLists: string
    titleForNewTask: string
    newTitleForTask: string
}
const initialState = {
    newTodolistTitleForAdd: '',
    newTitleValueForToDoLists: '',
    titleForNewTask: '',
    newTitleForTask: ''
}
export type HelpReducerActionType = { type: string, payload: { value: string } }

const NEW_TDL_TITLE_FOR_ADD = 'NEW_TDL_TITLE_FOR_ADD'
export const newTdlTitleForAddAC = (value: string): HelpReducerActionType => {
    return {
        type: NEW_TDL_TITLE_FOR_ADD,
        payload: {
            value
        }
    }
}

const NEW_TDL_TITLE_VALUE = 'NEW_TDL_TITLE_VALUE'
export const newTitleValueAC = (value: string): HelpReducerActionType => {
    return {
        type: NEW_TDL_TITLE_VALUE,
        payload: {
            value

        }
    }
}

const TITLE_FOR_NEW_TASK = 'TITLE_FOR_NEW_TASK'
export const titleForNewTaskAC = (value: string): HelpReducerActionType => {
    return {
        type: TITLE_FOR_NEW_TASK,
        payload: {
            value

        }
    }
}

const NEW_TITLE_FOR_TASK = 'NEW_TITLE_FOR_TASK'
export const newTitleForTaskAC = (value: string): HelpReducerActionType => {
    return {
        type: NEW_TITLE_FOR_TASK,
        payload: {
            value

        }
    }
}

export const helpingReducer = (state: HelpingReducerInitialStateType = initialState, action: HelpReducerActionType): HelpingReducerInitialStateType => {
    switch (action.type) {
        case NEW_TDL_TITLE_FOR_ADD:
            return {...state, newTodolistTitleForAdd: action.payload.value}
        case NEW_TDL_TITLE_VALUE:
            return {...state, newTitleValueForToDoLists: action.payload.value}
        case TITLE_FOR_NEW_TASK:
            return {...state, titleForNewTask: action.payload.value}
        case NEW_TITLE_FOR_TASK:
            return {...state, newTitleForTask: action.payload.value}
        default:
            return {...state}
    }
}
