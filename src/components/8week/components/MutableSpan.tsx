import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type MutableSpanPropsType = {
    titleValue: string
    //inputValue: string
    //isEditModeOn: boolean
    //onChangeCallback: (inputValue: string) => void
    renameCallback: (newTitleValue: string) => void
    //editModeChanger: () => void
}

export const MutableSpan = (props: MutableSpanPropsType) => {
    const [error, setError] = useState<string>('')
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState(props.titleValue)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = e.currentTarget.value
        setInputValue(newInputValue)
        setError('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            renameTitleValue()
        }
    }

    const renameTitleValue = () => {
        if (inputValue.trim()) {
            props.renameCallback(inputValue.trim())
            setEditMode(false)
        } else {
            setError('enter new value')
        }
    }

    const editModeChanger = () => {
        setEditMode(true)
    }

    return (
        <div>
            {editMode ?
                <>
                    <input placeholder={error ? error : ''} onKeyPress={onKeyPressHandler}
                           onChange={onChangeHandler}
                           value={inputValue}
                           autoFocus
                           type="text"/>
                    <Button buttonTitle={'Save'}
                            callback={renameTitleValue}/>
                </>
                : <span onDoubleClick={editModeChanger}>{props.titleValue}</span>}
        </div>
    );
};