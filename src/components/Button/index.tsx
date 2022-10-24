import { NormalButton, NoBgButton } from './styles'

import { AiOutlineRight } from 'react-icons/ai'

type ButtonTypes = {
  text: string,
  hasLink?: string,
  hasArrow?: boolean,
  noBgButton?: boolean,
}

export function Button({ text, hasLink, noBgButton, hasArrow }: ButtonTypes) {

  // If the button receive opaqueButton, it style will be differet
  return (
    <>
      {noBgButton ? (
        <NoBgButton>
          <a href={hasLink}>{text}</a>  
        </NoBgButton>
       
      ): (
        <NormalButton>
          <a href={hasLink}>
            {text} 
            
          </a>
          {hasArrow && (
            <AiOutlineRight size={20} fontWeight='700' />
          )}
        </NormalButton>
      )}
    </>
  )
}