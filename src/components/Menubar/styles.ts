import styled from "styled-components";

export const Menu = styled.div`
  padding: 10px 180px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  width: 32px;
  height: 32px;
`

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;

    li {
      color: var(--subtitle-color);
      font-weight: 600;
      font-size: 1rem;
    }
  }
`
