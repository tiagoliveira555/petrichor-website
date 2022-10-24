import styled from "styled-components";

export const Card = styled.div`
position: relative;
width: 388px;
height: 368px;

background: #F8F8F8;
border-radius: 36px;

display: flex;
flex-direction: column;
padding: 60px
`
export const ProjectLogo = styled.img`
  padding: 16px 0 0 0;
`

export const ProjectName = styled.h3`
  font-size: 18px;
  
  padding: 16px 0 0 0;
  font-weight: 800;
  color: #2C2C2E;
`

export const ProjectDescription = styled.span`
  font-size: 16px;
  padding: 16px 0 0 0;
  font-weight: 600;
  color: #333333;
`
export const ProjectInfos = styled.img`
  display: flex;
`
export const ProjectButton = styled.a`
  padding: 113px 0 60px 0;
  color: var(--blue);
  
  font-size: 16px;
  font-weight: 700;

`