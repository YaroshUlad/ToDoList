import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddNewItemType = {
    newItemValue: string
    setNewItem: (value: string) => void
    addNewItem: (newItemValue: string) => void
}

export const AddNewItem = (props: AddNewItemType) => {
    const [error, setError] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        props.setNewItem(newValue)
        setError('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }
    const onClickHandler = () => {
        if (props.newItemValue.trim()) {
            props.addNewItem(props.newItemValue.trim())
            props.setNewItem('')
        } else {
            setError('Field is required')
        }
    }
    return (
        <div>
            <input placeholder={error && error} onKeyPress={onKeyPressHandler} value={props.newItemValue}
                   onChange={onChangeHandler} type="text"/>
            <button disabled={!!error} onClick={onClickHandler}>+</button>
        </div>
    );
};