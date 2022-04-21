import React, {ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = {}
type FullInputPropsType = DefaultInputPropsType & InputPropsType


export const Input: React.FC<FullInputPropsType> = ({
                                                        type,
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
            console.log(value.trim())
            setValue('')
        } else {
            setError('Please enter new Task')
        }
    }
    return (
        <div>
            <div className={''}>
                <input onKeyPress={onKeyPressHandler} onChange={onChangeHandler} value={value} type="text"/>
                {error && <span>{error}</span>}
            </div>
            <div>
                <button onClick={onClickHandler}>+</button>
            </div>
        </div>
    );
};
