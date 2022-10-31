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
`

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 92px;

    li {
      color: var(--gray);
      font-weight: 600;
      font-size: 18px;
    }
    

    .dropdown-submenu {
      display: none;
      
    }

    .dropdown-submenu li {
      font-size: 14px;
      cursor: pointer;
      
    }
    
  }
`
