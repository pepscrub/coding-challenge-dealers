import { FC, PropsWithChildren, ReactNode } from "react";
import { CARD_IMG } from "../constants";
import { Button } from "./button";

interface CommonProps extends PropsWithChildren {
  active?: boolean;
  title?: string | ReactNode;
  text?: string | ReactNode;
  imgUrl?: string;
  onClick: () => void;
}

interface CardPropsNoButton extends CommonProps {
  button: false;
  buttonText?: string | ReactNode;
}

interface CardPropsWithButton extends CommonProps {
  button: true;
  buttonText: string | ReactNode;
}

type CardProps = CardPropsWithButton | CardPropsNoButton;

export const Card: FC<CardProps> = ({
  active,
  button,
  buttonText,
  children,
  text,
  title,
  onClick,
  imgUrl = CARD_IMG
}) => {
  return (
    <div className={`card${active ? ' active' : ''}`} onClick={onClick}>
      <img src={imgUrl} />
      <div className="container">
        <div className="card-content">
          {title && typeof title === 'string' ? <h2>{title}</h2> : title}
          {text && typeof text === 'string' ? <p>{text}</p> : text}
          {children}
        </div>
        <div className="card-actions">
          {button && <Button>{buttonText}</Button>}
        </div>
      </div>
    </div>
  )
}