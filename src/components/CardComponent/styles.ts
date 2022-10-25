import styled from "styled-components";

export const Card = styled.div`

width: 388px;
height: 368px;

background: #F8F8F8;
border-radius: 36px;

display: flex;
flex-direction: column;
padding: 61px
`
export const ProjectLogo = styled.a`
  padding: 16px 0 0 0;
`

export const ProjectName = styled.h3`
  font-size: 18px;
  
  padding: 0;
  font-weight: 800;
  color: #2C2C2E;
`

export const ProjectDescription = styled.span`
  font-size: 16px;
  padding: 16px 0 0 0;
  font-weight: 600;
  color: #333333;
`
export const ProjectInfos = styled.div`
  display: flex;
  padding: 30px 0px 0px 0px;
  align-items: center;
  `
export const InfoText = styled.span`
  color: var(--gray);
  padding: 4px 52px 0px 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 144.2%;
`
export const ProjectButton = styled.a`
  padding: 40px 0 60px 0;
  color: var(--blue);
  font-size: 16px;
  font-weight: 700;
`
