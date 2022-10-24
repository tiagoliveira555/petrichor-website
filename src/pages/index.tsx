import { Menubar } from "../components/Menubar" 
import { Button } from "../components/Button"

import { Title, ButtonGroup, CardGroup } from "./styles"
import { CardComponent } from "../components/CardComponent"

export default function Home() {
  return(
    <>
      <header>
        <Menubar />

        <Title>Top-notch code from <span>outstanding</span> engineers.</Title>

        <ButtonGroup>
          <Button text="Contribua agora" hasArrow />
          <Button text="Saiba mais" hasLink="https://github.com/petrichor-foundation/petrichor-website" noBgButton />
        </ButtonGroup>
      </header>
      <main>
        <CardGroup>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
        </CardGroup>
      </main>
    </>
  )
}
