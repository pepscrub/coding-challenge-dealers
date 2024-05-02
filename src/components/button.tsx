import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const Button: FC<Props> = ({
  text,
  children,
  ...props
}) => {
  return (
    <button className="button" {...props}>
      {children}
      {text}
    </button>
  )
}