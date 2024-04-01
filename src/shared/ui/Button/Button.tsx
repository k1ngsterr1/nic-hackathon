import React from "react";
import './index.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: string;
    size: string;
    fullwidth?: boolean;
    children?: React.ReactNode;
}

const Button = (
    {
        variant = 'primary',
        size = 'sm',
        fullwidth,
        children,
        ...rest
    }: IButton) => {
    const buttonClasses = [
        'a-button',
        `a-button--${variant}`,
        `a-button--${size}`,
        fullwidth ? 'a-button--fullwidth' : null
    ];

    return (
        <button className={buttonClasses.join(' ')} {...rest}>
            {children || 'Добавить'}
        </button>
    );
};

export default Button;
