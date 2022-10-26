import { Menubar } from "../components/Menubar" 
import { Button } from "../components/Button"
import { CardComponent } from "../components/CardComponent"
import { RepoCategory } from "../components/RepoCategory"

import { 
  Title, 
  ButtonGroup, 
  CardGroup, 
  CategoriesGroup,
  AboutUs
} from "./styles"

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

        <AboutUs>
          <h3>What we do</h3>
          <p>
            We are a open-source organization with the purpose of showcasing and rewarding the best projects, suscipit nizzle, 
            gravida vizzle, the bizzle. Pellentesque ghetto tortizzle. My shizz erizzle. Doggy bizzle dolizzle dapibizzle turpis 
            cool funky fresh. Mauris break it down nibh et gangster.
          </p>
          <p>
            Fo shizzle mah nizzle fo rizzle, mah home g-dizzle izzle tortizzle. Brizzle eleifend fo shizzle nisi. In yo platea dictumst. 
            Tellivizzle dapibizzle. Curabitizzle tellizzle urna, pretizzle , mattizzle ac, dang vitae, nunc. Shit suscipit. 
            Integizzle shit velit sizzle purizzle.
          </p>
          <p>
            Sed metus urna, luctus izzle, tristique izzle, brizzle izzle, i saw beyonces tizzles and my pizzle went crizzle. 
            Donec dang, funky fresh boofron facilisizzle my shizz, neque justo consequizzle you son of a bizzle, mollizzle 
            fringilla libero erizzle get down get down away.
          </p>
        </AboutUs>
      </main>
    </>
  )
}
