import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<DefaultButtonProps> = ({...restProps}) => {
    return (
        <button {...restProps}>{restProps.value}</button>
    );
};