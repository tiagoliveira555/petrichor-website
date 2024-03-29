import styled from "styled-components";

export const NormalButton = styled.button`
  min-width: 220px;
  height: 64px;
  padding: 0 32px;

  cursor: pointer;
  border: none;
  border-radius: 1rem;

  background: var(--blue);
  color: var(--bg-content);

  font-size: 18px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  transition: filter 300ms;

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    outline: 2px solid var(--blue-outline);
    outline-offset: 2px;
  }
`;

export const NoBgButton = styled.button`
  min-width: 220px;
  height: 64px;
  padding: 0 32px;

  cursor: pointer;
  border: none;
  border-radius: 1rem;

  background: var(--blue-opacity);
  color: var(--blue);

  font-size: 18px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  transition: filter 300ms;

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    outline: 2px solid var(--blue-outline);
    outline-offset: 2px;
  }
`;
