import { ReactNode, useEffect, useState } from "react"
import { LoremIpsum } from "./components"
import { CardItems } from "./components/card"
import { CardGroup } from "./components/cardGroup"
import { Hero } from "./components/hero/hero"

export const App = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const [items, setItems] = useState<ReactNode[]>([]);
  const [heroLorem, setHeroLorem] = useState<ReactNode | undefined>();

  useEffect(() => {
    setItems(
      Array.from({ length: 3 }).map((_, i) => <LoremIpsum paragraphs={i === 2 ? 2 : 1} />)
    );
    setHeroLorem(<LoremIpsum />);
  }, []);


  return (
    <>
      <Hero text={heroLorem} />
      <CardGroup>
        {items.map((lorem, i) => (
          <CardItems
            active={ i === selectedCard }
            key={`card-${i}`}
            title={`Heading ${i + 1}`}
            text={lorem}
            button
            onClick={() => setSelectedCard(i)}
            buttonText={`Button ${i + 1}`}
          />
        ))}
      </CardGroup>
    </>
  )
}
