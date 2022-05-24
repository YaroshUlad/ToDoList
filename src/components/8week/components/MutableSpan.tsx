import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type MutableSpanPropsType = {
    titleValue: string
    inputValue: string
    isEditModeOn: boolean
    onChangeCallback: (inputValue: string) => void
    renameCallback: (newTitleValue: string) => void
    editModeChanger: () => void
}

export const MutableSpan = (props: MutableSpanPropsType) => {
    const [error, setError] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = e.currentTarget.value
        props.onChangeCallback(newInputValue)
        setError('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            renameTitleValue()
        }
    }

    const renameTitleValue = () => {
        if (props.inputValue.trim()) {
            props.renameCallback(props.inputValue)
            props.editModeChanger()
        } else {
            setError('enter new value')
        }
    }

    const editModeChanger = () => {
        props.editModeChanger()
    }

    return (
        <div>
            {props.isEditModeOn ?
                <>
                    <input placeholder={error ? error : ''} onKeyPress={onKeyPressHandler}
                           onChange={onChangeHandler}
                           value={props.inputValue}
                           autoFocus
                           type="text"/>
                    <Button buttonTitle={'Save'}
                            callback={renameTitleValue}/>
                </>
                : <span onDoubleClick={editModeChanger}>{props.titleValue}</span>}
        </div>
    );
};