import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export const AddItemForm = () => {
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
            console.log(value.trim()) // send value with callBack
            setValue('')
        } else {
            setError('Field is required')
        }
    }

    return (
        <div>
            <div>
                <input value={value} onKeyPress={onKeyPressHandler} onChange={onChangeHandler} type="text"/>
                <button onClick={onClickHandler}>+</button>
            </div>
            {error ? <span>{error}</span> : <></>}
        </div>
    );
}