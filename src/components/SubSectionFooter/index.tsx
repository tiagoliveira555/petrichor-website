import { SectionCategory } from './styles' 

export function SubSectionFooter() {
  return (
    <>
      <SectionCategory>
        <h3>Support</h3>

        <div className='categoryInfo'>
          <a href="#">Paypal</a>
          <a href="#">Btc wallet</a>
          <a href="#">Eth wallet</a>
        </div>
      </SectionCategory>

      <SectionCategory>
        <h3>Links</h3>

        <div className='categoryInfo'>
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
          <a href="#">Twitter</a>
        </div>
      </SectionCategory>

      <SectionCategory>
        <h3>Company</h3>

        <div className='categoryInfo'>
          <a href="#">Dictumst</a>
          <a href="#">Platea</a>
          <a href="#">Dapibizzle</a>
        </div>
      </SectionCategory>
    </>
  )
}