type HelpingReducerInitialStateType = {
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
type ActionType = { type: string, value: string }

const NEW_TDL_TITLE_FOR_ADD = 'NEW_TDL_TITLE_FOR_ADD'
export const newTdlTitleForAddAC = (value: string): ActionType => {
    return {
        type: NEW_TDL_TITLE_FOR_ADD,
        value
    }
}

const NEW_TDL_TITLE_VALUE = 'NEW_TDL_TITLE_VALUE'
export const newTitleValueAC = (value: string): ActionType => {
    return {
        type: NEW_TDL_TITLE_VALUE,
        value
    }
}

const TITLE_FOR_NEW_TASK = 'TITLE_FOR_NEW_TASK'
export const titleForNewTaskAC = (value: string): ActionType => {
    return {
        type: TITLE_FOR_NEW_TASK,
        value
    }
}

const NEW_TITLE_FOR_TASK = 'NEW_TITLE_FOR_TASK'
export const newTitleForTaskAC = (value: string): ActionType => {
    return {
        type: NEW_TITLE_FOR_TASK,
        value
    }
}

export const helpingReducer = (state: HelpingReducerInitialStateType = initialState, action: ActionType): HelpingReducerInitialStateType => {
    switch (action.type) {
        case NEW_TDL_TITLE_FOR_ADD:
            return {...state, newTodolistTitleForAdd: action.value}
        case NEW_TDL_TITLE_VALUE:
            return {...state, newTitleValueForToDoLists: action.value}
        case TITLE_FOR_NEW_TASK:
            return {...state, titleForNewTask: action.value}
        case NEW_TITLE_FOR_TASK:
            return {...state, newTitleForTask: action.value}
        default:
            return state
    }

}