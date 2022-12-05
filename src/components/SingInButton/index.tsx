import { GithubButton } from "./styles"

import { VscGithubInverted } from "react-icons/vsc"
import { MdOutlineClose } from "react-icons/md"

import { getSession, signIn, signOut } from "next-auth/client"
import { HomeProps } from "../../pages"

import Image from "next/image"

export function SingInButton({ session }: HomeProps) {
  return (
    <>
      {session ? (
        <GithubButton onClick={() => signOut()}>
          <Image
            width={30}
            height={30}
            src={session.user.image}
            alt="User Image"
          />
          <span>{session.user.name}</span>
          <MdOutlineClose size="18px" />
        </GithubButton>
      ) : (
        <GithubButton onClick={() => signIn("github")}>
          <VscGithubInverted size="18px" />
          <span>Sign in with Github</span>
        </GithubButton>
      )}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
