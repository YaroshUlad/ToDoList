import React from "react";

type ButtonPropsTitle = {
    buttonTitle: string,
    callBack: (buttonName: string, buttonID: number) => void,
    buttonID: number
}

export const Button = (props: ButtonPropsTitle) => {
    const onClickHandler = (buttonName: string, buttonID: number) => {
        props.callBack(buttonName, buttonID)
    }
    return (
        <button/* title={props.buttonTitle}*/ onClick={() => onClickHandler(props.buttonTitle, props.buttonID)}>
            {props.buttonTitle}
        </button>
    )
}


/*
import React from "react";

type ButtonPropsType = {
    title: string
    id:number
    callBack: (buttonName: string, id: number) => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        //console.log(props.title + 'in button comp')
        props.callBack(props.title,props.id)
    }

    return (
        <button title={props.title} onClick={onClickHandler}>{props.title}</button>
    )
}
*/


/*
import React from "react";

type ButtonPropsType = {
    titleButton: string,
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.titleButton}</button>
    )
}
*/