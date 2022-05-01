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
    removeTask: (taskId: string) => void
    isDoneChanger: (taskId: string, newIsDone: boolean) => void
}
export const MappingTasks = (props: MappingTasksPropsType) => {
    return (
        <ol>
            {props.data.map((el, index) => {
                const checkBoxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.isDoneChanger(el.id, e.currentTarget.checked)
                }
                const newTaskTitleCallBackHandler = (newItemTitle: string) => {
                    console.log(newItemTitle)
                }
                const deleteTaskHandler = () => {
                    props.removeTask(el.id)
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