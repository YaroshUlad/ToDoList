import React from "react";

type CheckboxPropsType = {
    callBack: () => void
    isDone: boolean
}

export const Checkbox = (props: CheckboxPropsType) => {

    const onChangeHandler = () => {
        props.callBack()
    }

    return (
        <>
            <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
        </>
    )
}


/*import React from "react";

export type CheckBoxType = {
    isDone: boolean
    Id: number
    callBack: (id: number, isDone: boolean) => void
}

export const Checkbox = (props: CheckBoxType) => {
    const onChangeHandler = () => {
        props.callBack(props.Id, props.isDone)
    }


    return (
        <>
            <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
        </>
    )
}*/


/*
import React from "react";

type CheckboxPropsType = {
    isDone: boolean,
    callBack: (boxId: number) => void,
    boxID: number
}

export const Checkbox = (props: CheckboxPropsType) => {
    const onClickHandler = (boxid: number) => {
        props.callBack(boxid)
    }
    return (
        <input type="checkbox" checked={props.isDone} onChange={() => onClickHandler(props.boxID)}/>
    )
}*/
