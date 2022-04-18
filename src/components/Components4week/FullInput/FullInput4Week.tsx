import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './FullInput4Week.module.css'

type FullInput4WeekPropsType = {
    setTitleValueHandler: (value: string) => void
}

export const FullInput4Week = (props: FullInput4WeekPropsType) => {
    const [newTaskValue, setNewTaskValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskValue(e.currentTarget.value)
    }
    const [error, setError] = useState('')
    let errorMessage = 'Field is required'
    const onClickHandler = () => {
        if (newTaskValue.trim() !== '') {
            props.setTitleValueHandler(newTaskValue.trim())
            setNewTaskValue('')
        } else {
            setError('s.errors')
        }

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }
    return (
        <div className={s.wrapper}>
            <div>
                <input className={error ? s.errors : ''} onKeyPress={onKeyPressHandler}
                       value={newTaskValue}
                       onChange={onChangeHandler}
                       type="text"/>
                {error ? <div className={error ? s.errors : ''}>{errorMessage}</div> : <></>}
            </div>
            <div><input disabled={error ? true : false}
                        className={error ? s.errorButton : ''}
                        onClick={onClickHandler}
                        type="button" value={'+'}/>
            </div>
        </div>
    )
}