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
        <input type="checkbox" checked={props.isDone} defaultChecked={false}
               onClick={() => onClickHandler(props.boxID)}/>
    )
}