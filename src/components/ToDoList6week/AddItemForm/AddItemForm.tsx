import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './AddItemForm.module.css'

export type AddItemFormPropsType = {
    callBack: (newItemTitle: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            onClickHandler()
        }
    }
    const onClickHandler = () => {
        if (value.trim()) {
            props.callBack(value.trim()) // send value with callBack
            setValue('')
        } else {
            setError('Field is required')
        }
    }

    return (
        <div>
            <div>
                <input className={error ? s.error : ''}
                       value={value}
                       onKeyPress={onKeyPressHandler}
                       onChange={onChangeHandler}
                       type="text"/>
                <button disabled={!!error}
                        className={error ? s.error : ''}
                        onClick={onClickHandler}>+
                </button>
            </div>
            {error ? <span className={s.error}>{error}</span> : <></>}
        </div>
    );
}
