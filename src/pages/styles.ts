import styled from "styled-components";

export const Title = styled.h1`
  width: 900px;
  line-height: 94px;

  font-size: 92px;
  text-align: center;
  font-weight: 800;
  color: var(--title-color);

  margin: 100px auto 74px;

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

export const CardGroup = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 20px;
`

export const CategoriesGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  row-gap: 82px;

  margin: 140px 230px 160px;
`