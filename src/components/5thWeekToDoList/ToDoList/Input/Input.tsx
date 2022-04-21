import React, {ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = {
    newTaskName: (value: string) => void
}
type FullInputPropsType = DefaultInputPropsType & InputPropsType


export const Input: React.FC<FullInputPropsType> = ({
                                                        type, newTaskName, ...restProps
                                                    }) => {

    const [value, setValue] = useState<string>('')

    const [error, setError] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }

    const onClickHandler = () => {
        if (value.trim()) {
            newTaskName(value.trim()) // ________________ sent to toDoList new Task name
            setValue('')
        } else {
            setError('Please enter new Task')
        }
    }
    return (
        <div className={s.inputWrapper}>
            <div className={s.inputArea}>
                <input className={error ? s.inputError : s.input} onKeyPress={onKeyPressHandler}
                       onChange={onChangeHandler} value={value} type="text"/>
                {error && <span className={s.error}>{error}</span>}
            </div>
            <div>
                <button disabled={error ? true : false} className={error ? s.buttonError : s.button}
                        onClick={onClickHandler}>+
                </button>
            </div>
        </div>
    );
};
