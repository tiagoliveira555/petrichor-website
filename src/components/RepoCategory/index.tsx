import { TbArrowForward } from 'react-icons/tb'
import { FaCheck } from 'react-icons/fa'

import { Container, VerifiedIcon, RepoInfo, Description } from './styles'

type RepoCategoryProps = {
  title: string,
  description: string,
}

export function RepoCategory({ title, description }: RepoCategoryProps) {
  return (
    <Container>
      <VerifiedIcon>
        <FaCheck color='var(--blue)' size='10px' />
      </VerifiedIcon>

      <RepoInfo>
        <div className='title'>
          <h3>{title}</h3> 
          <TbArrowForward color='var(--title-color)' size='22px' />
        </div>

        <Description>{description}</Description>
      </RepoInfo>
    </Container>
  )
}