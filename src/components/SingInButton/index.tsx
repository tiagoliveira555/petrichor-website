import { GithubButton } from './styles'

import { VscGithubInverted } from 'react-icons/vsc'
import { MdOutlineClose } from 'react-icons/md'

import { useState } from 'react'


export function SingInButton() {
  const [ logged,  setLogged ] = useState(false)  

  return (
    <>
      {logged ? (
        <GithubButton onClick={() => setLogged(!logged)}>
          <span>Pietro Rhyan</span>
          <MdOutlineClose size='18px' />
        </GithubButton>
      ) : (
        <GithubButton onClick={() => setLogged(!logged)}>
          <i><VscGithubInverted size='18px' /></i>
          <span>Sign in with Github</span>
        </GithubButton>
      )}
    </>
  )
}