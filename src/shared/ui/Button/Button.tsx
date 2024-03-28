import { ButtonHTMLAttributes } from "react";

interface IButton {
  className?: string;
  label?: string;
}

export default function Button({ className, label, ...rest }: IButton) {
  return (
    <button 
      className={className} 
      {...rest}
    >
      {label}
    </button>
  )
}