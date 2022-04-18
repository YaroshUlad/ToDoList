import React, {ChangeEvent} from "react";
import {ObjectsInTaskArrayType} from "../App4Week";
import {UniButton} from "../UniButton/UniButton";

type Tasks4WeekPropsType = {
    data: Array<ObjectsInTaskArrayType>
    checkboxChanger: (id: string, newIsDone: boolean) => void
    deleteTask: (id: string) => void
}


export const Tasks4Week = (props: Tasks4WeekPropsType) => {
    const deleteTask = (id: string) => {
        props.deleteTask(id)
    }
    return (
        <ol>
            {props.data.map((el, index) => {
                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.checkboxChanger(el.id, e.currentTarget.checked)
                }
                return (
                    <li key={el.id} value={index + 1}>
                        <input type={'checkbox'} checked={el.isDone} onChange={onChangeHandler}/>
                        {el.title}
                        <UniButton title={'x'} callBack={() => deleteTask(el.id)}/>
                    </li>
                )
            })}
        </ol>
    )
}