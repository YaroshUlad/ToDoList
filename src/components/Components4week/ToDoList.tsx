import React from "react";
import {FullInput4Week} from "./FullInput/FullInput4Week";

type ToDoList4weekPropsType = {
    title: string
}

export const ToDoList = (props: ToDoList4weekPropsType) => {
    const setTitleValueHandler = (value: string) => {
        console.log('log from todo ', value)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <FullInput4Week setTitleValueHandler={setTitleValueHandler}/>
        </div>
    )
}