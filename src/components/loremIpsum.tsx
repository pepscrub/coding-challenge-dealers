import { LoremIpsum as LI } from "lorem-ipsum";
import { CSSProperties, FC } from "react";

interface LoremIpsumProps {
  overrideText?: string
  style?: CSSProperties;
  paragraphs?: number;
}

const lorem = new LI({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export const LoremIpsum: FC<LoremIpsumProps> = ({ overrideText, style, paragraphs }) => {
  if (overrideText) return <p style={style}>{overrideText}</p>;
  console.log();
  return (
    <>
      {
        lorem.generateParagraphs(Math.floor( paragraphs ? paragraphs :Math.random() * (2 - 1 + 1) + 1) )
          .split('\n')
          .map((paragraph) => <p key={`lorem-${paragraph}`} style={style}>{paragraph}</p>)
      }
    </>
  )
}