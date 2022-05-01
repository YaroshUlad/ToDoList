import React, {ChangeEvent} from "react";
import {MutableSpan} from "../../MutableSpan/MutableSpan";
import {Button} from "../../Button/Button";

type TasksObjectType = {
    id: string
    title: string
    isDone: boolean
}
type MappingTasksPropsType = {
    data: Array<TasksObjectType>
}
export const MappingTasks = (props: MappingTasksPropsType) => {
    return (
        <ol>
            {props.data.map((el, index) => {
                const checkBoxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    console.log(e.currentTarget.checked)
                }
                const newTaskTitleCallBackHandler = (newItemTitle: string) => {
                    console.log(newItemTitle)
                }
                const deleteTaskHandler = () => {
                    console.log(el.id)
                }
                return (
                    <li key={el.id} value={index + 1}>
                        <input type="checkbox" checked={el.isDone} onChange={checkBoxOnChangeHandler}/>
                        <MutableSpan itemTitle={el.title} newItemTitleCallBack={newTaskTitleCallBackHandler}/>
                        <Button buttonTitle={'x'} callBack={deleteTaskHandler}/>
                    </li>
                )
            })}
        </ol>
    )
}