import styled from "styled-components";

export const SectionCategory = styled.div`
  display: flex;
  flex-direction: column;

  gap: 27px;

  h3 {
    font-size: 1.12rem;
    font-weight: 700;
    color: var(--subtitle-color);
  }

  .categoryInfo {
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    a {
      font-size: 1rem;
      font-weight: 600;
      color: var(--subtitle-color);
    }
  }
`