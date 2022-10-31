import { Menu, Logo, Navbar } from "./styles"
import Image from "next/image"

export function Menubar() {
  return (
    <Menu>
      <Logo href="#">
        <Image
          width="36px"
          height="36px"
          src="/assets/logo.svg"
          alt="Petrichor Logo"
        />
      </Logo>

      <Navbar>
        <ul className="menu">
          <li>About us</li>
          <li id="menu">
            <a>Categories</a>
            <ul className="dropdown-submenu">
              <li>
                <a>Individual</a>
              </li>
              <li>
                <a>Enterprise</a>
              </li>
            </ul>
          </li>
          <li>Source</li>
          <li>Contact</li>
        </ul>
      </Navbar>
    </Menu>
  )
}