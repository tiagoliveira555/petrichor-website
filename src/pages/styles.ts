import styled from "styled-components";

export const Title = styled.h1`
  width: 900px;
  line-height: 94px;

  font-size: 92px;
  text-align: center;
  font-weight: 800;
  color: var(--title-color);

  margin: 120px auto 74px;

  span {
    color: var(--blue);
  }
`
export const ButtonGroup = styled.div`
  margin: 0 auto 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 2rem;
`