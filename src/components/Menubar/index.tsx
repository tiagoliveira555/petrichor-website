import { Menu, Logo, Navbar } from "./styles"
import Image from "next/image"

export function Menubar() {
  return (
    <Menu>
      <Logo href="#">
        <Image width="36px" height="36px" src="/assets/logo.svg" alt="Petrichor Logo" />
      </Logo>

      <Navbar>
        <ul>
          <li>About us</li>
          <li>Categories</li>
          <li>Source</li>
          <li>Contact</li>
        </ul>
      </Navbar>
    </Menu>
  )
}