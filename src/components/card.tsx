import { FC, PropsWithChildren, ReactNode } from "react";
import { CARD_IMG } from "../constants";
import { Button } from "./button";
import { Container } from "./container";
import { Image } from "./image";

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

export const CardContent: FC<PropsWithChildren> = ({
  children,
}) => (
  <div className="card-content">
    {children}
  </div>
)

export const CardActions: FC<PropsWithChildren> = ({
  children
}) => (
  <div className="card-actions">
    {children}
  </div>
)

export const Card: FC<PropsWithChildren & { active?: boolean, onClick?: () => void }> = ({
  active,
  children,
  onClick
}) => (
  <div className={`card${active ? ' active' : ''}`} onClick={onClick}>
    {children}
  </div>
)

export const CardItems: FC<CardProps> = ({
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
    <Card active={active} onClick={onClick}>
      <Image imgUrl={imgUrl} />
      <Container>
        <CardContent>
          {title && typeof title === 'string' ? <h2>{title}</h2> : title}
          {text && typeof text === 'string' ? <p>{text}</p> : text}
        </CardContent>
        <CardActions>
          {button && <Button>{buttonText}</Button>}
        </CardActions>
        {children}
      </Container>
    </Card>
  )
}