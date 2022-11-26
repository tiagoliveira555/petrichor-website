import { Menu, Logo, Navbar } from "./styles"

import Image from "next/image"

import { SingInButton } from "../SingInButton"
import { AiOutlineDown } from "react-icons/ai"

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
          <li id="menu-dropdown">
            <a>
              <span>Categories</span>
              <AiOutlineDown size={16} color="#AEAEB2"></AiOutlineDown>
            </a>
            <ul className="dropdown-submenu">
              <li>
                <span>&#9900;</span>
                <a>Individual</a>
              </li>
              <li>
                <span>&#9900;</span>
                <a>Enterprise</a>
              </li>
            </ul>
          </li>
          <li>Source</li>
          <li>Contact</li>

          <SingInButton />
        </ul>
      </Navbar>
    </Menu>
  )
}