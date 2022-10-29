import styled from "styled-components";

export const Card = styled.div`
  width: 360px;
  height: 290px;

  background: var(--bg-content);
  border-radius: 36px;

  display: flex;
  flex-direction: column;
  padding: 42px;
`

export const ProjectName = styled.h3`
  font-size: 1.12rem;
  
  padding: 0;
  font-weight: 800;
  color: var(--title-color);
`

export const ProjectDescription = styled.span`
  font-size: 1rem;
  padding: 16px 0 0 0;
  font-weight: 600;
  color: var(--subtitle-color);
`

export const ProjectInfos = styled.div`
  display: flex;
  padding: 14px 0 0 0;
  align-items: center;
`

export const InfoText = styled.span`
  color: var(--gray);
  padding: 4px 52px 0px 10px;
  font-size: 1rem;
  font-weight: 600;
`

export const ProjectButton = styled.a`
  margin: 32px 0 60px 0;
  color: var(--blue);
  font-size: 1rem;
  font-weight: 700;
`
