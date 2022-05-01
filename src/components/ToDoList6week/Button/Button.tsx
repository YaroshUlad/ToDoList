import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = {
    buttonTitle: string
    callBack: () => void
}
type FullButtonPropsType = DefaultButtonPropsType & ButtonPropsType

export const Button: React.FC<FullButtonPropsType> = ({buttonTitle, callBack, ...restPros}) => {
    return (
        <button onClick={callBack} {...restPros}>{buttonTitle}</button>
    )
}