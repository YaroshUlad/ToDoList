import React, {ChangeEvent} from 'react';
import s from './MapTasks.module.css'

type DataObjectPropsType = {
    id: string
    title: string
    isDone: boolean
}

type MapTasksPropsType = {
    data: Array<DataObjectPropsType>
    checkBoxOnChangeCallBack: (e: boolean, id: string) => void
    deleteTaskHandler: (id: string) => void
}

export const MapTasks: React.FC<MapTasksPropsType> = ({data, checkBoxOnChangeCallBack, deleteTaskHandler}) => {

    const checkBoxOnChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        // send to ToDoLIst new IsDone property
        checkBoxOnChangeCallBack(e.currentTarget.checked, id)
    }
    const onClickHandler = (id: string) => {
        deleteTaskHandler(id)
    }

    return (
        <div className={s.wrapper}>
            {data.map((el, index) => {
                return (
                    <div key={el.id} className={s.lists}>
                        <input checked={el.isDone}
                               onChange={(e) => checkBoxOnChange(e, el.id)}
                               type="checkbox"/>
                        <div>{el.title}</div>
                        <button onClick={() => onClickHandler(el.id)}>x</button>
                    </div>
                )
            })}
        </div>
    );
};
