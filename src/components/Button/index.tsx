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
        <a href={hasLink}>
          <NoBgButton>
            {text}  
          </NoBgButton>
        </a>
       
      ): (
        <a href={hasLink}>
          <NormalButton>
            {text} 
          </NormalButton>
        </a>
      )}
    </>
  )
}