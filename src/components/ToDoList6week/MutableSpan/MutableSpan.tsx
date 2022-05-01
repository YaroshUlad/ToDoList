import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type MutableSpanPropsType = {
    itemTitle: string
    newItemTitleCallBack: (newItemTitle: string) => void
}

export const MutableSpan: React.FC<MutableSpanPropsType> = ({itemTitle, newItemTitleCallBack}) => {
    const [isMutable, setIsMutable] = useState<boolean>(false)
    const [value, setValue] = useState<string>(itemTitle)

    const onDblClickHandler = () => {
        setIsMutable(true)
    }
    const onBlurChangeHandler = () => {
        if (value.trim()) {
            newItemTitleCallBack(value.trim())
            setIsMutable(false)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            onBlurChangeHandler()
        }
    }
    return (
        isMutable
            ? <input onKeyPress={onKeyPressHandler}
                     autoFocus
                     onChange={onChangeHandler}
                     onBlur={onBlurChangeHandler}
                     value={value}
                     type="text"/>
            : <span onDoubleClick={onDblClickHandler}>
                {itemTitle}
            </span>
    )
}