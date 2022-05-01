import React, {ChangeEvent} from "react";
import {MutableSpan} from "../../MutableSpan/MutableSpan";
import {Button} from "../../Button/Button";
import s from './MapTask.module.css'

type TasksObjectType = {
    id: string
    title: string
    isDone: boolean
}
type MappingTasksPropsType = {
    data: Array<TasksObjectType>
    removeTask: (taskId: string) => void
    renameTask: (taskId: string, newTaskTitle: string) => void
    isDoneChanger: (taskId: string, newIsDone: boolean) => void
}
export const MappingTasks = (props: MappingTasksPropsType) => {
    return (
        <div className={s.wrap}>
            {props.data.map((el) => {
                const checkBoxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.isDoneChanger(el.id, e.currentTarget.checked)
                }
                const newTaskTitleCallBackHandler = (newItemTitle: string) => {
                    props.renameTask(el.id, newItemTitle)
                }
                const deleteTaskHandler = () => {
                    props.removeTask(el.id)
                }
                return (
                    <div key={el.id} className={s.wrapTask}>
                        <input type="checkbox" checked={el.isDone} onChange={checkBoxOnChangeHandler}/>
                        <div>
                            <MutableSpan itemTitle={el.title} newItemTitleCallBack={newTaskTitleCallBackHandler}/>
                        </div>
                        <Button buttonTitle={'x'} callBack={deleteTaskHandler}/>
                    </div>
                )
            })}
        </div>
    )
}