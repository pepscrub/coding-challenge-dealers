import { ReactNode, useEffect, useState } from "react"
import { LoremIpsum } from "./components"
import { Card } from "./components/card"
import { Hero } from "./components/hero"

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
      <div className="card-container">
        {items.map((lorem, i) => (
          <Card
            active={ i === selectedCard }
            key={`card-${i}`}
            title={`Heading ${i + 1}`}
            text={lorem}
            button
            onClick={() => setSelectedCard(i)}
            buttonText={`Button ${i + 1}`}
          />
        ))}
      </div>
    </>
  )
}
