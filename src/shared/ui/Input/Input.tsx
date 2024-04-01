import {ReactHTMLElement} from "react";
import './index.scss'


interface IInput extends ReactHTMLElement<HTMLInputElement>{
    placeholder: string,
    autocomplete: boolean
    bgColor: string

}


const Input = (
    {
        bgColor = 'black',
        ...rest
    }: IInput
) => {

    return (
        <div className="field">
            <input
                className={`field__input--${bgColor}`} {...rest}
                placeholder=""

            />
        </div>
    );
};

export default Input;
