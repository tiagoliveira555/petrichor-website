import styled from "styled-components";

export const NormalButton = styled.button`
  width: 250px;
  height: 69px;
  padding: 0 8px;

  cursor: pointer;
  border: none;
  border-radius: 1rem;

  background: var(--blue);
  color: var(--bg-content);

  font-size: 1.275rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

`

export const NoBgButton = styled.button`
  width: 250px;
  height: 69px;
  padding: 0 8px;

  cursor: pointer;
  border: none;
  border-radius: 1rem;

  background: var(--blue-opacity);
  color: var(--blue);

  font-size: 1.275rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`