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

export const CardGroup = styled.section`
  display: flex;
  gap: 24px;
  padding: 0 20px;
`

export const CategoriesGroup = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  row-gap: 82px;

  margin: 140px 230px 160px;
`

export const AboutUs = styled.section`
  margin: 0 160px 160px;

  h3 {
    font-size: 1.12rem;
    color: var(--subtitle-color);
    font-weight: 800;

    padding-bottom: 42px;
  }

  p {
    font-size: 1rem;
    font-weight: 600;

    line-height: 1.5rem;

    color: var(--text-color);

    padding-bottom: 30px;
  }
`

export const CompaniesGroup = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 200px;

  gap: 85px;

  h3 {
    font-size: 1.12rem;
    color: var(--subtitle-color);
    font-weight: 800;
  }

  .companies {
    display: flex;
    align-items: center;

    gap: 100px;
  }
`

export const FooterSection = styled.div`
  width: 100%;
  height: 287px;

  background: var(--bg-content);

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 180px;
`