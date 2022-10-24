import { Menu, Logo, Navbar } from "./styles"
import Image from "next/image"

export function Menubar() {
  return (
    <Menu>
      <Logo href="#">
        <Image width="42px" height="42px" src="/images/logo.svg" alt="Petrichor Logo" />
      </Logo>

      <Navbar>
        <ul>
          <li>About Us</li>
          <li>Categories</li>
          <li>Source</li>
          <li>Contact</li>
        </ul>
      </Navbar>
    </Menu>
  )
}