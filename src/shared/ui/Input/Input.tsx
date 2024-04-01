import { InputHTMLAttributes } from "react";
import cn from 'classnames';
import './index.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  bgColor = 'black',
  className,
  ...rest
}) => {
  return (
    <div className="field">
      <input
        className={cn(
          className,
          `field__input--${bgColor} outline-0 border-0 bg-transparent`
        )}
        {...rest}
      />
    </div>
  );
};

export default Input;
