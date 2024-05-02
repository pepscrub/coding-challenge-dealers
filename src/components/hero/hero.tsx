import { FC, PropsWithChildren, ReactNode } from "react";
import { HEADER_IMG } from "../../constants";
import { Button } from "../button";

interface HeroProps extends PropsWithChildren{
  darken?: number;
  imgUrl?: string;
  text?: string | ReactNode;
}

export const HeroContent: FC<PropsWithChildren & {imgUrl: string; darken: number}> = ({ children, darken, imgUrl }) => (
  <section
      className="hero-section"
      style={{
        background: `
          center center,
          no-repeat,
          linear-gradient( rgba(0, 0, 0, ${darken}), rgba(0, 0, 0, ${darken}) ),
          url(${imgUrl})
        `,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0'
      }}
    >
      {children}
    </section>
);

export const HeroText: FC<PropsWithChildren & { title?: string; text: ReactNode  }> = ({ children, title, text }) => (
  <article className="hero-text">
    <h1 className="hero-title">{title ? title : 'Welcome to G Automotive'}</h1>
    {text}
    <Button style={{ marginTop: '1.5rem' }}>
      Contact Us
    </Button>
    {children}
  </article>
)

export const Hero: FC<HeroProps> = ({
  darken = 0.5,
  imgUrl = HEADER_IMG,
  text,
  children,
}) => {
  return (
    <header>
      <HeroContent imgUrl={imgUrl} darken={darken}>
        <HeroText text={text}>
          {children}
        </HeroText>
      </HeroContent>
    </header>
  )
}