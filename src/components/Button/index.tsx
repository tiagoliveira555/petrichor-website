import { NormalButton, NoBgButton } from './styles'

type ButtonTypes = {
  text: string,
  hasLink?: string,
  noBgButton?: boolean,
}

export function Button({ text, hasLink, noBgButton }: ButtonTypes) {

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
          {(
            <AiOutlineRight size={20} fontWeight='700' />
          )}
        </NormalButton>
      )}
    </>
  )
}