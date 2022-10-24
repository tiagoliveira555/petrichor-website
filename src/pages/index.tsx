import { Menubar } from "../components/Menubar" 
import { Button } from "../components/Button"

import { Title, ButtonGroup } from "./styles"

export default function Home() {
  return(
    <>
      <header>
        <Menubar />

        <Title>Top-notch code from <span>outstanding</span> engineers.</Title>

        <ButtonGroup>
          <Button text="Contribua agora ›" />
          <Button text="Saiba mais" hasLink="https://github.com/petrichor-foundation/petrichor-website" noBgButton />
        </ButtonGroup>
      </header>
      <main>

      </main>
    </>
  )
}
