import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = {
    callback: () => void
    buttonTitle: string
}

type FullButtonType = DefaultButtonPropsType & ButtonPropsType

export const Button: React.FC<FullButtonType> = ({callback, buttonTitle, ...restProps}) => {

    const onClickHandler = () => {
        callback()
    }
    return (
        <button onClick={onClickHandler}>{buttonTitle}</button>
    );
};