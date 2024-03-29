import styled from "styled-components";

export const Menu = styled.div`
  padding: 20px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 8px;

  &:focus {
    outline: 2px solid var(--blue-outline);
    outline-offset: 2px;
  }
`

export const Navbar = styled.nav`
  .menu {
    display: flex;
    align-items: center;
    list-style: none;

    gap: 72px;

    li {
      color: var(--gray);
      font-weight: 600;
      font-size: 1rem;

      cursor: pointer;
    }

    .dropdown-submenu {
      display: none;
      list-style: none;

      visibility: hidden;
      opacity: 0;
    }
    #menu-dropdown a {
      display: flex;
      align-items: center;
    }
    #menu-dropdown a span {
      padding-right: 4px;
    }
    #menu-dropdown:hover > .dropdown-submenu {
      visibility: visible;
      opacity: 1;

      display: flex;
      flex-direction: column;
      align-items: left;

      position: absolute;

      padding-left: 2px;
    }

    .dropdown-submenu li {
      display: flex;
      margin-top: 10px;
      font-size: 1rem;
    }

    .dropdown-submenu li span {
      width: .8em;
      visibility: hidden;
    }

    .dropdown-submenu li:hover > span {
      color: var(--blue);
      transition: 300ms;
      visibility: visible;
    }
  }
`
