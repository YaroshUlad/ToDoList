import React from "react";

type UniButtonPropsType = {
    title: string
    callBack: () => void
}

export const UniButton = (props: UniButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    )
}