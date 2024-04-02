import { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  className?: string;
  classField?: string;
}

const Input: React.FC<IInputProps> = ({
  bgColor = "black",
  className,
  classField,
  ...rest
}) => {
  return (
    <div className={cn(classField, "field")}>
      <input
        className={cn(
          className,
          `field__input--${bgColor} w-full outline-0 border-0 bg-transparent`
        )}
        {...rest}
      />
    </div>
  );
};

export default Input;
