import { Menubar } from "../components/Menubar" 
import { Button } from "../components/Button"
import { CardComponent } from "../components/CardComponent"
import { RepoCategory } from "../components/RepoCategory"

import { Title, ButtonGroup, CardGroup, CategoriesGroup } from "./styles"

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
        <CardGroup>
          <CardComponent />
          <CardComponent />
        </CardGroup>

        <CategoriesGroup>
          <RepoCategory title="CLI Tools" description="Lorizzle ipsizzle dolizzle sit amet."/>
          <RepoCategory title="Languages" description="Lorizzle ipsizzle dolizzle sit amet."/>
          <RepoCategory title="Apps" description="Lorizzle ipsizzle dolizzle sit amet."/>
          <RepoCategory title="Blockchain" description="Lorizzle ipsizzle dolizzle sit amet."/>
          <RepoCategory title="Libraries" description="Lorizzle ipsizzle dolizzle sit amet."/>
          <RepoCategory title="Automation" description="Lorizzle ipsizzle dolizzle sit amet."/>
        </CategoriesGroup>
      </main>
    </>
  )
}
